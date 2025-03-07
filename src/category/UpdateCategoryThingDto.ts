import { IsString, IsOptional } from "class-validator";

export class UpdateCategoryThingDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  postId?: string;
}
