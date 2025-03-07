import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { DbService } from 'src/db/db.service';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, DbService],
})
export class CategoryModule {}
