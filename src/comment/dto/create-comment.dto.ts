import { IsOptional, IsString, IsEmail, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsEmail()
  email: string;

  @IsString()
  content: string;

  @IsOptional()
  @IsUUID()
  PostId?: string;

  @IsOptional()
  @IsUUID()
  userId?: string;
}
