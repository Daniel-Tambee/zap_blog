import { Category } from "@prisma/client";
export declare class CreatePostDTO {
    tags: string[];
    image: string;
    title: string;
    text: string;
    author: string;
    category?: Category;
}
