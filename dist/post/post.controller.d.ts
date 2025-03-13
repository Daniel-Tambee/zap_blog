import { PostService } from './post.service';
import { CreatePostDTO } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Category } from '@prisma/client';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
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
    findAll(category?: Category, search?: Category): Promise<{
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
    recentPosts(): Promise<{
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
