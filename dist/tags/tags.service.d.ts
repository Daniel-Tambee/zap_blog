import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { DbService } from 'src/db/db.service';
export declare class TagsService {
    private readonly db;
    constructor(db: DbService);
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
