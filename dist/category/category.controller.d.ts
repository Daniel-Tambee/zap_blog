import { CategoryService } from './category.service';
import { CategoryThing } from '@prisma/client';
import { CreateCategoryThingDto } from './CreateCategoryThingDto';
import { UpdateCategoryThingDto } from './UpdateCategoryThingDto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    create(createCategoryDto: CreateCategoryThingDto): Promise<CategoryThing>;
    findAll(): Promise<CategoryThing[]>;
    findOne(id: string): Promise<CategoryThing>;
    update(id: string, updateCategoryDto: UpdateCategoryThingDto): Promise<CategoryThing>;
    remove(id: string): Promise<CategoryThing>;
}
