import { DbService } from 'src/db/db.service';
export declare class SubscriberService {
    private readonly db;
    constructor(db: DbService);
    createSubscriber(params: {
        name: string;
        email: string;
        weekly: boolean;
        beginner: boolean;
    }): Promise<any>;
}
