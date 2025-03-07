import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
export declare class TagsController {
    private readonly tagsService;
    constructor(tagsService: TagsService);
    create(createTagDto: CreateTagDto): Promise<{
        name: string;
        id: string;
        postId: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): Promise<{
        name: string;
        id: string;
        postId: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        id: string;
        postId: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateTagDto: UpdateTagDto): Promise<{
        name: string;
        id: string;
        postId: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        id: string;
        postId: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
