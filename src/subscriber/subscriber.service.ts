import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class SubscriberService {
  /**
   *
   */
  /**
   *
   */
  constructor(private readonly db: DbService) {}

  async createSubscriber(params: {
    name: string;
    email: string;
    weekly: boolean;
    beginner: boolean;
  }) {
    try {
      const subscriber = await this.db.subscriber.create({
        data: {
          email: params.email,
          name: params.name,
          Beginner_Guide: params.beginner,
          Zap_weekly: params.weekly,
        },
      });
      return subscriber;
    } catch (error) {
      return error.message;
    }
  }
}
