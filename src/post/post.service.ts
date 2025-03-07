import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DbService } from 'src/db/db.service';
import { Category, Post } from '@prisma/client';
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';

@Injectable()
export class PostService {
  constructor(private readonly db: DbService) {}

  async create(createPostDto: CreatePostDTO) {
    try {
      const { tags, ...postData } = createPostDto;
  
      // Process tags: Find existing ones, create missing ones
      const tagRecords = await Promise.all(
        tags.map(async (tagDto: CreateTagDto) => {
          const { name } = tagDto; // Destructure name from the CreateTagDto object
  
          // Check if the tag already exists in the database
          const existingTag = await this.db.tags.findUnique({
            where: { name },
          });
  
          if (existingTag) {
            return { id: existingTag.id }; // If tag exists, connect it
          }
  
          // If the tag doesn't exist, create a new tag
          const newTag = await this.db.tags.create({
            data: { name },
          });
  
          return { id: newTag.id }; // Return the new tag ID
        })
      );
  
      // Create the post with associated tags
      const post = await this.db.post.create({
        data: {
          ...postData,
          tags: {
            connect: tagRecords, // Connect the tags (existing or newly created)
          },
        },
        include: { tags: true },
      });
  
      return post;
    } catch (error) {
      console.error('Error creating post:', error);
      throw new Error('Failed to create post');
    }
  }
  
  
  async findAll(category: Category) {
    try {
      if (!category) {
        const posts = await this.db.post.findMany({
          include: { tags: true },
        });
        return posts;
      }
      // If a category is provided, filter by it.
      // The original switch-case was removed in favor of a dynamic query filter.
      const posts = await this.db.post.findMany({
        where: { category },
        include: { tags: true },
      });
      return posts;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const post = await this.db.post.findUniqueOrThrow({
        where: { id },
        include: { tags: true },
      });
      if (!post) {
        throw new Error(`Post with id ${id} not found`);
      }
      return post;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    try {
      const { tags, ...postData } = updatePostDto; // Extract tags from DTO

      const updateData: any = { ...postData };

      // Handle tag updates only if `tags` are provided
      if (tags) {
        updateData.tags = {
          set: tags.map((tagId) => ({ id: tagId })), // Ensure the correct format
        };
      }

      const post = await this.db.post.update({
        where: { id },
        data: updateData,
        include: { tags: true },
      });

      return post;
    } catch (error) {
      throw error;
    }
  }

  async getRecentPosts(): Promise<Post[]> {
    try {
      const latestPosts = await this.db.post.findMany({
        orderBy: {
          created_at: 'desc',
        },
      });
      return latestPosts;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const post = await this.db.post.delete({
        where: { id },
      });
      return post;
    } catch (error) {
      throw error;
    }
  }
}
