
import { PostModule } from './post/post.module';
import { DbModule } from './db/db.module';
import { Module } from '@nestjs/common';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [PostModule, DbModule, TagsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
