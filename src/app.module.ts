
import { PostModule } from './post/post.module';
import { DbModule } from './db/db.module';
import { Module } from '@nestjs/common';
import { TagsModule } from './tags/tags.module';
import { CareersModule } from './careers/careers.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [PostModule, DbModule, TagsModule, CareersModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
