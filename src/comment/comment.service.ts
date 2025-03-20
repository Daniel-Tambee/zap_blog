import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { DbService } from 'src/db/db.service';

@Injectable()
export class CommentService {
  constructor(private readonly db: DbService) {}

  async create(createCommentDto: CreateCommentDto) {
    const { name, email, content, PostId, userId } = createCommentDto;

    try {
      const comment = await this.db.comment.create({
        data: {
          name,
          email,
          content,
          Post: PostId ? { connect: { id: PostId } } : undefined,
        },
        include: { Post: true },
      });

      return [];
    } catch (error) {
      throw new Error(`Failed to create comment: ${error.message}`);
    }
  }

  async findAll() {
    return await this.db.comment.findMany({
      include: { Post: true },
    });
  }

  async findOne(id: string) {
    const comment = await this.db.comment.findUnique({
      where: { id },
      include: { Post: true },
    });

    if (!comment) {
      throw new NotFoundException(`Comment with ID ${id} not found`);
    }

    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    try {
      const comment = await this.db.comment.update({
        where: { id },
        data: updateCommentDto,
        include: { Post: true },
      });

      return comment;
    } catch (error) {
      throw new NotFoundException(`Failed to update comment: ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      return await this.db.comment.delete({ where: { id } });
    } catch (error) {
      throw new NotFoundException(`Failed to delete comment: ${error.message}`);
    }
  }
}
