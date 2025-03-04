import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class TagsService {
  constructor(private readonly db: DbService) {}

  async create(createTagDto: CreateTagDto) {
    try {
      const tag = await this.db.tags.create({
        data: {
          ...createTagDto,
        },
      });
      return tag;
    } catch (error) {
      // You can customize error handling/logging here
      throw error;
    }
  }

  async findAll() {
    try {
      const tags = await this.db.tags.findMany();
      return tags;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const tag = await this.db.tags.findUnique({
        where: { id },
      });
      if (!tag) {
        throw new Error(`Tag with id ${id} not found`);
      }
      return tag;
    } catch (error) {
      throw error;
    }
  }

  async update(id: string, updateTagDto: UpdateTagDto) {
    try {
      const tag = await this.db.tags.update({
        where: { id },
        data: updateTagDto,
      });
      return tag;
    } catch (error) {
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const tag = await this.db.tags.delete({
        where: { id },
      });
      return tag;
    } catch (error) {
      throw error;
    }
  }
}
