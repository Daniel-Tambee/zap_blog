import { PostModule } from './post/post.module';
import { DbModule } from './db/db.module';
import { Module } from '@nestjs/common';
import { TagsModule } from './tags/tags.module';
import { CareersModule } from './careers/careers.module';
import { CategoryModule } from './category/category.module';
import { DbService } from './db/db.service';
import { ExternalsController } from './externals/externals.controller';
import { ExternalsService } from './externals/externals.service';
import { ExternalsModule } from './externals/externals.module';
import { SubscriberModule } from './subscriber/subscriber.module';

@Module({
  imports: [PostModule, DbModule, TagsModule, CareersModule, CategoryModule, ExternalsModule, SubscriberModule],
  controllers: [ExternalsController],
  providers: [ExternalsService, DbService],
})
export class AppModule {}
