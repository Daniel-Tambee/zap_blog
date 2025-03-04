import { Module } from '@nestjs/common';
import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { DbService } from 'src/db/db.service';

@Module({
  controllers: [TagsController],
  providers: [TagsService, DbService],
})
export class TagsModule {}
