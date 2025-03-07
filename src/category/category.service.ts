import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { DbService } from 'src/db/db.service';
import { CategoryThing } from '@prisma/client';
import { CreateCategoryThingDto } from './CreateCategoryThingDto';
import { UpdateCategoryThingDto } from './UpdateCategoryThingDto';

@Injectable()
export class CategoryService {
  constructor(private readonly db: DbService) {}

  async create(createCategoryDto: CreateCategoryThingDto): Promise<CategoryThing> {
    const newCategory = await this.db.categoryThing.create({
      data: createCategoryDto,
    });
    return newCategory;
  }

  async findAll(): Promise<CategoryThing[]> {
    return this.db.categoryThing.findMany();
  }

  async findOne(id: string): Promise<CategoryThing | null> {
    return this.db.categoryThing.findUnique({
      where: { id },
    });
  }

  async update(id: string, updateCategoryDto: UpdateCategoryThingDto): Promise<CategoryThing> {
    return this.db.categoryThing.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: string): Promise<CategoryThing> {
    return this.db.categoryThing.delete({
      where: { id },
    });
  }
}


