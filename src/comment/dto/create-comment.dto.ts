import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, IsUUID } from 'class-validator';

export class CreateCommentDto {
  @ApiProperty({
    description: 'The name of the commenter',
    example: 'John Doe',
    required: false, // Optional field
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'The email of the commenter',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The content of the comment',
    example: 'This is a comment',
  })
  @IsString()
  content: string;

  @ApiProperty({
    description: 'The ID of the associated post (optional)',
    example: 'f12d987e-0000-4000-8000-000000000000',
    required: false, // Optional field
  })
  @IsOptional()
  @IsUUID()
  PostId?: string;

  @ApiProperty({
    description: 'The ID of the user who made the comment (optional)',
    example: 'f12d987e-0000-4000-8000-000000000000',
    required: false, // Optional field
  })
  @IsOptional()
  @IsUUID()
  userId?: string;
}
