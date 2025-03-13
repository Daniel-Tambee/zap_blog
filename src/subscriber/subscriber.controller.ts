import { CreateUserParamsDto } from './CreateUserParamsDto';
import { Body, Controller, Post } from '@nestjs/common';
import { SubscriberService } from './subscriber.service';

@Controller('subscriber')
export class SubscriberController {
  constructor(private readonly subscriber: SubscriberService) {}

  @Post('SubscribeToZapNewsLetter')
  async createSubscriber(
    @Body()
    params: CreateUserParamsDto,
  ) {
    try {
      return this.subscriber.createSubscriber(params);
    } catch (error) {
      return error;
    }
  }
}
