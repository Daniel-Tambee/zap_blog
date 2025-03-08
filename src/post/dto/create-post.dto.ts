import { ApiProperty } from '@nestjs/swagger';
import { Category } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsString,
  IsArray,
  ValidateNested,
  IsEnum,
  IsOptional,
} from 'class-validator';
import { CreateTagDto } from 'src/tags/dto/create-tag.dto';

export class CreatePostDTO {
  @ApiProperty({ description: 'URL of the image associated with the post' })
  @IsString()
  image: string;

  @ApiProperty({ description: 'Title of the post' })
  @IsString()
  title: string;

  @ApiProperty({ description: 'Content of the post' })
  @IsString()
  text: string;

  @ApiProperty({ description: 'Author of the post' })
  @IsString()
  author: string;

  @ApiProperty({
    description: 'Tags associated with the post',
    type: [CreateTagDto],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateTagDto)
  tags: CreateTagDto[];

  @ApiProperty({
    description: 'Category of the post',
    enum: Category,
    default: Category.Opinion_Pieces,
  })
  @IsEnum(Category)
  @IsOptional()
  category?: Category = Category.Opinion_Pieces;

  @ApiProperty({
    description: 'Categories associated with the post',
    type: [String], // Assuming that CategoryThing has a 'name' or similar identifier
    isArray: true,
    required: false,
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  Categories?: string[];
}
