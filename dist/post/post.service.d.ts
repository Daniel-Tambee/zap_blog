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
            name: string;
            postId: string;
            id: string;
            created_at: Date;
            updated_at: Date;
        }[];
        Categories: {
            name: string;
            postId: string;
            id: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        title: string;
        image: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(category: Category, search: string): Promise<{
        title: string;
        image: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    } | {
        title: string;
        image: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOne(id: string): Promise<{
        tags: {
            name: string;
            postId: string;
            id: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        title: string;
        image: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<{
        tags: {
            name: string;
            postId: string;
            id: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        title: string;
        image: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    getRecentPosts(): Promise<Post[]>;
    remove(id: string): Promise<{
        title: string;
        image: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
