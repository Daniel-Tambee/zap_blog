import { Injectable } from '@nestjs/common';
import { Category, Post } from '@prisma/client';

import { DbService } from 'src/db/db.service';

@Injectable()
export class ExternalsService {
  /**
   *
   */
  constructor(private readonly db: DbService) {}

  async search(query: string): Promise<Post | Post[] | null> {
    // Find posts where the title, text, or author contains the search query
    const posts = await this.db.post.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: 'insensitive' } },
          { text: { contains: query, mode: 'insensitive' } },
          { author: { contains: query, mode: 'insensitive' } },
        ],
      },
    });
    console.log(posts);

    if (posts.length === 0) {
      return [];
    } else if (posts.length === 1) {
      return posts[0];
    } else {
      return posts;
    }
  }
  async stats(): Promise<{ category: Category; count: number }[]> {
    const result = await this.db.post.groupBy({
      by: ['category'],
      _count: {
        id: true, // count the number of posts by using the primary key
      },
    });

    // Transform the result so that each object contains the category and the count
    return result.map((group) => ({
      category: group.category,
      count: group._count.id,
    }));
  }
}
