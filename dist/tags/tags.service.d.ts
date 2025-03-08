import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { DbService } from 'src/db/db.service';
export declare class TagsService {
    private readonly db;
    constructor(db: DbService);
    create(createTagDto: CreateTagDto): Promise<{
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(): Promise<{
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updateTagDto: UpdateTagDto): Promise<{
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    remove(id: string): Promise<{
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
