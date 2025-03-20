import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<{
        Post: {
            title: string;
            image: string;
            text: string;
            author: string;
            category: import(".prisma/client").$Enums.Category;
            id: string;
            created_at: Date;
            updated_at: Date;
        };
    } & {
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        content: string;
        email: string;
    }>;
    findAll(): Promise<({
        Post: {
            title: string;
            image: string;
            text: string;
            author: string;
            category: import(".prisma/client").$Enums.Category;
            id: string;
            created_at: Date;
            updated_at: Date;
        };
    } & {
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        content: string;
        email: string;
    })[]>;
    findOne(id: string): Promise<{
        Post: {
            title: string;
            image: string;
            text: string;
            author: string;
            category: import(".prisma/client").$Enums.Category;
            id: string;
            created_at: Date;
            updated_at: Date;
        };
    } & {
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        content: string;
        email: string;
    }>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<{
        Post: {
            title: string;
            image: string;
            text: string;
            author: string;
            category: import(".prisma/client").$Enums.Category;
            id: string;
            created_at: Date;
            updated_at: Date;
        };
    } & {
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        content: string;
        email: string;
    }>;
    remove(id: string): Promise<{
        name: string;
        postId: string;
        id: string;
        created_at: Date;
        updated_at: Date;
        content: string;
        email: string;
    }>;
}
