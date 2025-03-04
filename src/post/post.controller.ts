import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Category } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDTO) {
    return await this.postService.create(createPostDto);
  }

  // Optionally filter posts by category using a query parameter.
  // pExample: GET /post?category=Opinion_Pieces
  @Get()
  async findAll(@Query('category') category?: Category) {
    if (category) {
      return await this.postService.findAll(category);
    }
    // If no category is provided, return all posts.
    // You may update the service accordingly if you want a different behavior.
    return await this.postService.findAll(null);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.postService.remove(id);
  }
}
