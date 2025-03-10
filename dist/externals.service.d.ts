import { Category, Post } from '@prisma/client';
import { DbService } from 'src/db/db.service';
export declare class ExternalsService {
    private readonly db;
    constructor(db: DbService);
    search(query: string): Promise<Post | Post[] | null>;
    stats(): Promise<{
        category: Category;
        count: number;
    }[]>;
}
