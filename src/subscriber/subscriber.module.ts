import { Module } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';
import { SubscriberController } from './subscriber.controller';
import { DbService } from 'src/db/db.service';

@Module({
  providers: [SubscriberService, DbService],
  controllers: [SubscriberController],
})
export class SubscriberModule {}
