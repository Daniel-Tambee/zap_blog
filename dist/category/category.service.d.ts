import { DbService } from 'src/db/db.service';
import { CategoryThing } from '@prisma/client';
import { CreateCategoryThingDto } from './CreateCategoryThingDto';
import { UpdateCategoryThingDto } from './UpdateCategoryThingDto';
export declare class CategoryService {
    private readonly db;
    constructor(db: DbService);
    create(createCategoryDto: CreateCategoryThingDto): Promise<CategoryThing>;
    findAll(): Promise<CategoryThing[]>;
    findOne(id: string): Promise<CategoryThing | null>;
    update(id: string, updateCategoryDto: UpdateCategoryThingDto): Promise<CategoryThing>;
    remove(id: string): Promise<CategoryThing>;
}
