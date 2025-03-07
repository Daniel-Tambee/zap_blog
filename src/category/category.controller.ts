import { Controller, Get, Post, Body, Param, Delete, HttpException, HttpStatus, Put } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CategoryThing } from '@prisma/client';
import { CreateCategoryThingDto } from './CreateCategoryThingDto';
import { UpdateCategoryThingDto } from './UpdateCategoryThingDto';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  /**
   * Creates a new CategoryThing.
   * @param createCategoryDto - Data Transfer Object containing the details of the category to be created.
   * @returns The created CategoryThing object.
   */
  @ApiOperation({ summary: 'Create a new category' })
  @ApiResponse({ status: 201, description: 'Category created successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryThingDto,
  ): Promise<CategoryThing> {
    try {
      return await this.categoryService.create(createCategoryDto);
    } catch (error) {
      throw new HttpException(
        'Failed to create category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Retrieves all CategoryThing entities.
   * @returns An array of CategoryThing objects.
   */
  @ApiOperation({ summary: 'Retrieve all categories' })
  @ApiResponse({ status: 200, description: 'Categories retrieved successfully.' })
  @Get()
  async findAll(): Promise<CategoryThing[]> {
    try {
      return await this.categoryService.findAll();
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve categories',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Retrieves a CategoryThing by its ID.
   * @param id - The ID of the category to retrieve.
   * @returns The CategoryThing object if found; otherwise, throws a 404 exception.
   */
  @ApiOperation({ summary: 'Retrieve a category by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the category to retrieve' })
  @ApiResponse({ status: 200, description: 'Category retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CategoryThing> {
    try {
      const category = await this.categoryService.findOne(id);
      if (!category) {
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
      }
      return category;
    } catch (error) {
      throw new HttpException(
        'Failed to retrieve category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Updates a CategoryThing by its ID.
   * @param id - The ID of the category to update.
   * @param updateCategoryDto - Data Transfer Object containing the updated details of the category.
   * @returns The updated CategoryThing object.
   */
  @ApiOperation({ summary: 'Update a category by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the category to update' })
  @ApiResponse({ status: 200, description: 'Category updated successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryThingDto,
  ): Promise<CategoryThing> {
    try {
      return await this.categoryService.update(id, updateCategoryDto);
    } catch (error) {
      throw new HttpException(
        'Failed to update category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * Deletes a CategoryThing by its ID.
   * @param id - The ID of the category to delete.
   * @returns The deleted CategoryThing object.
   */
  @ApiOperation({ summary: 'Delete a category by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the category to delete' })
  @ApiResponse({ status: 200, description: 'Category deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Category not found.' })
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<CategoryThing> {
    try {
      return await this.categoryService.remove(id);
    } catch (error) {
      throw new HttpException(
        'Failed to delete category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
