import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DbService } from 'src/db/db.service';
import { Category, Post } from '@prisma/client';
import { ExternalsService } from 'src/externals/externals.service';
export declare class PostService {
    private readonly db;
    private readonly externals;
    constructor(db: DbService, externals: ExternalsService);
    create(createPostDto: CreatePostDTO): Promise<{
        tags: {
            id: string;
            name: string;
            postId: string;
            created_at: Date;
            updated_at: Date;
        }[];
        Categories: {
            id: string;
            name: string;
            postId: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        category: import(".prisma/client").$Enums.Category;
        image: string;
        title: string;
        text: string;
        author: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(category: Category, search: string): Promise<{
        category: import(".prisma/client").$Enums.Category;
        image: string;
        title: string;
        text: string;
        author: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    } | {
        category: import(".prisma/client").$Enums.Category;
        image: string;
        title: string;
        text: string;
        author: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        tags: {
            id: string;
            name: string;
            postId: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        category: import(".prisma/client").$Enums.Category;
        image: string;
        title: string;
        text: string;
        author: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
        tags: {
            id: string;
            name: string;
            postId: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        category: import(".prisma/client").$Enums.Category;
        image: string;
        title: string;
        text: string;
        author: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    getRecentPosts(): Promise<Post[]>;
    remove(id: string): Promise<{
        category: import(".prisma/client").$Enums.Category;
        image: string;
        title: string;
        text: string;
        author: string;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
