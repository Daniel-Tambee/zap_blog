import { CreateUserParamsDto } from './CreateUserParamsDto';
import { SubscriberService } from './subscriber.service';
export declare class SubscriberController {
    private readonly subscriber;
    constructor(subscriber: SubscriberService);
    createSubscriber(params: CreateUserParamsDto): Promise<any>;
}
