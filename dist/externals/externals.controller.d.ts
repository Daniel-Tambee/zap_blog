import { ExternalsService } from './externals.service';
import { Category } from '@prisma/client';
export declare class ExternalsController {
    private readonly externals;
    constructor(externals: ExternalsService);
    search(query: string): Promise<any>;
    stats(): Promise<{
        category: Category;
        count: number;
    }[]>;
}
