import { Category } from "@prisma/client";

export class CreatePostDTO {
  tags: string[];
  image: string;
  title: string;
  text: string;
  author: string;
  category?: Category;
}
