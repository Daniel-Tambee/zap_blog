import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { DbService } from 'src/db/db.service';
import { Category, Post } from '@prisma/client';
export declare class PostService {
    private readonly db;
    constructor(db: DbService);
    create(createPostDto: CreatePostDTO): Promise<{
        tags: {
            id: string;
            name: string;
            postId: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        image: string;
        title: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findAll(category: Category): Promise<({
        tags: {
            id: string;
            name: string;
            postId: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        image: string;
        title: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    })[]>;
    findOne(id: string): Promise<{
        tags: {
            id: string;
            name: string;
            postId: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        image: string;
        title: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
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
        image: string;
        title: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
    getRecentPosts(): Promise<Post[]>;
    remove(id: string): Promise<{
        image: string;
        title: string;
        text: string;
        author: string;
        category: import(".prisma/client").$Enums.Category;
        id: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
