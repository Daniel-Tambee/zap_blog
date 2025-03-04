import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { DbService } from 'src/db/db.service';

@Module({
  controllers: [PostController],
  providers: [PostService, DbService],
})
export class PostModule {}
