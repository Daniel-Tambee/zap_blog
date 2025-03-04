import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DbService } from 'src/db/db.service';
import { Category } from '@prisma/client';

@Injectable()
export class PostService {
  constructor(private readonly db: DbService) {}

  async create(createPostDto: CreatePostDTO) {
    try {
      // Destructure tags from createPostDto.
      // Here, we assume tags is an array of strings (the tag names).
      const { tags, ...postData } = createPostDto;
      const post = await this.db.post.create({
        data: {
          ...postData,
          // Create related tag records for each tag name.
          tags: {
            create: tags.map((tagName: string) => ({ name: tagName })),
          },
        },
        include: { tags: true },
      });
      return post;
    } catch (error) {
      // Consider logging the error or handling it further.
      throw error;
    }
  }

  async findAll(category: Category) {
    try {
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
      const post = await this.db.post.findUnique({
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
