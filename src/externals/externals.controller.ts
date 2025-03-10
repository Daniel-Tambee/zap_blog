import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ExternalsService } from './externals.service';
import { Category } from '@prisma/client';

@ApiTags('Externals')
@Controller('Externals')
export class ExternalsController {
  /**
   *
   */
  constructor(private readonly externals: ExternalsService) {}
  /**
   * Search posts based on a query string.
   *
   * This endpoint searches for posts by checking if the provided query string
   * is found in the title, text, or author fields of the posts.
   *
   * @param query The search query string.
   * @returns A single post if exactly one match is found, multiple posts if several matches are found, or null if no matches are found.
   */
  @Get('search')
  @ApiOperation({ summary: 'Search posts by query' })
  @ApiQuery({
    name: 'query',
    description: 'Search query string',
    required: true,
  })
  @ApiResponse({
    status: 200,
    description:
      'Search results, either a single post, an array of posts, or null if none found.',
    // Note: If using auto-generated Swagger documentation for Prisma models, you might need a DTO.
    type: Post,
  })
  async search(@Query('query') query: string): Promise<unknown> {
    return this.externals.search(query);
  }

  /**
   * Get post statistics grouped by category.
   *
   * This endpoint aggregates posts by their category and returns the count of posts
   * for each category.
   *
   * @returns An array of objects, each containing a category and the count of posts in that category.
   */
  @Get('stats')
  @ApiOperation({ summary: 'Get post statistics by category' })
  @ApiResponse({
    status: 200,
    description: 'Statistics of posts grouped by category',
    schema: {
      example: [
        { category: 'Crypto_Trader_Insights', count: 10 },
        { category: 'Crypto_Beginner', count: 5 },
        { category: 'Press', count: 3 },
        { category: 'Opinion_Pieces', count: 8 },
      ],
    },
  })
  async stats(): Promise<{ category: Category; count: number }[]> {
    return this.externals.stats();
  }
}
