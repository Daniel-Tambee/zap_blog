import { IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreateCategoryThingDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  postId?: string;
}
