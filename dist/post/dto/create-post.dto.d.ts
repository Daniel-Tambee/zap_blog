import { Category } from '@prisma/client';
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';
export declare class CreatePostDTO {
    image: string;
    title: string;
    text: string;
    author: string;
    tags: CreateTagDto[];
    category?: Category;
    Categories?: string[];
}
