import { Injectable } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DbService } from 'src/db/db.service';
import { Category, Post } from '@prisma/client';
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';
import { CreateCategoryThingDto } from 'src/category/CreateCategoryThingDto';
import { ExternalsService } from 'src/externals/externals.service';

@Injectable()
export class PostService {
  constructor(
    private readonly db: DbService,
    private readonly externals: ExternalsService,
  ) {}

  async create(createPostDto: CreatePostDTO) {
    try {
      const { tags, category, Categories, ...postData } = createPostDto;

      // Get existing tags in bulk to minimize database calls
      const existingTags = await this.db.tags.findMany({
        where: {
          name: {
            in: (tags?.map((tag) => tag.name) ?? []).filter((name) => name), // Filter out invalid or empty tag names
          },
        },
      });

      // Get existing Categories in bulk (if any)
      const existingCategories = await this.db.categoryThing.findMany({
        where: {
          name: {
            in: Categories, // Assuming Categories is an array of strings
          },
        },
      });

      // Get the existing category (if any) to connect
      const existingCategory = await this.db.categoryThing.findFirst({
        where: { name: category }, // Assuming `category` is a string
      });

      // Process tags: either connect existing ones or create new ones
      const tagRecords = await Promise.all(
        tags.map(async (tagDto: CreateTagDto) => {
          const { name } = tagDto;

          const existingTag = existingTags.find((tag) => tag.name === name);

          if (existingTag) {
            return { id: existingTag.id }; // If tag exists, connect it
          }

          // If the tag doesn't exist, create a new tag
          const newTag = await this.db.tags.create({
            data: { name },
          });

          return { id: newTag.id }; // Return the new tag ID
        }),
      );

      // Process Categories: either connect existing ones or create new ones
      const categoryRecords = await Promise.all(
        Categories.map(async (categoryName: string) => {
          const existingCategory = existingCategories.find(
            (category) => category.name === categoryName,
          );

          if (existingCategory) {
            return { id: existingCategory.id }; // If category exists, connect it
          }

          // If the category doesn't exist, create a new category
          const newCategory = await this.db.categoryThing.create({
            data: { name: categoryName },
          });

          return { id: newCategory.id }; // Return the new category ID
        }),
      );

      // Create the post with associated tags, category, and Categories
      const post = await this.db.post.create({
        data: {
          ...postData,
          tags: {
            connect: tagRecords, // Connect the tags (existing or newly created)
          },
          category: 'Press',
          Categories: {
            connect: categoryRecords, // Connect the categories (existing or newly created)
          },
        },
        include: { tags: true, Categories: true }, // Include all related entities
      });

      return post;
    } catch (error) {
      console.error('Error creating post:', error);
      throw new Error(`Failed to create post: ${error.message || error}`);
    }
  }

  async findAll(category: Category, search: string) {
    try {
      if (!search) {
        const result = await this.externals.search(search);
        return result;
      }
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
