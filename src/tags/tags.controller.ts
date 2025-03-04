import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Patch, 
  Param, 
  Delete 
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@ApiTags('Tags') // Groups endpoints under "Tags" in Swagger UI
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new tag' })
  @ApiResponse({ status: 201, description: 'Tag successfully created' })
  @ApiBody({ type: CreateTagDto })
  async create(@Body() createTagDto: CreateTagDto) {
    return await this.tagsService.create(createTagDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tags' })
  @ApiResponse({ status: 200, description: 'List of tags retrieved successfully' })
  async findAll() {
    return await this.tagsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a tag by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Tag ID' })
  @ApiResponse({ status: 200, description: 'Tag retrieved successfully' })
  async findOne(@Param('id') id: string) {
    return await this.tagsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a tag by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Tag ID' })
  @ApiBody({ type: UpdateTagDto })
  @ApiResponse({ status: 200, description: 'Tag updated successfully' })
  async update(@Param('id') id: string, @Body() updateTagDto: UpdateTagDto) {
    return await this.tagsService.update(id, updateTagDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a tag by ID' })
  @ApiParam({ name: 'id', required: true, description: 'Tag ID' })
  @ApiResponse({ status: 200, description: 'Tag deleted successfully' })
  async remove(@Param('id') id: string) {
    return await this.tagsService.remove(id);
  }
}
