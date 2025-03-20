import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { DbService } from 'src/db/db.service';

@Module({
  controllers: [CommentController],
  providers: [CommentService, DbService],
})
export class CommentModule {}
