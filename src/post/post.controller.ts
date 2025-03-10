import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  Search,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
  ApiBody,
} from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Category } from '@prisma/client';

@ApiTags('Post') // Groups all endpoints under "Post"
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({ status: 201, description: 'Post successfully created' })
  @ApiBody({ type: CreatePostDTO })
  async create(@Body() createPostDto: CreatePostDTO) {
    return await this.postService.create(createPostDto);
  }

  @Get(':category/:search')
  @ApiOperation({ summary: 'Get all posts (optional filtering by category)' })
  @ApiQuery({
    name: 'category',
    required: false,
    enum: Category,
    description: 'Filter by category',
  })
  @ApiResponse({
    status: 200,
    description: 'List of posts retrieved successfully',
  })
  async findAll(
    @Query('category') category?: Category,
    @Query('category') search?: Category,
  ) {
    return await this.postService.findAll(category || null, search || null);
  }

  @Get()
  @ApiOperation({ summary: 'Get all latest posts' })
  @ApiResponse({
    status: 200,
    description: 'List of  recent posts retrieved successfully',
  })
  async recentPosts() {
    return await this.postService.getRecentPosts();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a post by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Post ID' })
  @ApiResponse({ status: 200, description: 'Post retrieved successfully' })
  async findOne(@Param('id') id: string) {
    return await this.postService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a post by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Post ID' })
  @ApiBody({ type: UpdatePostDto })
  @ApiResponse({ status: 200, description: 'Post updated successfully' })
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.postService.update(id, updatePostDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a post by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Post ID' })
  @ApiResponse({ status: 200, description: 'Post deleted successfully' })
  async remove(@Param('id') id: string) {
    return await this.postService.remove(id);
  }
}
