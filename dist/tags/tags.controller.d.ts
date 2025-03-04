import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        postId: string;
    }>;
    findAll(): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        postId: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        postId: string;
    }>;
    update(id: string, updateTagDto: UpdateTagDto): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        postId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        name: string;
        postId: string;
    }>;
}
