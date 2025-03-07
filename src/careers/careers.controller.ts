import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CareersService } from './careers.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Jobs } from '@prisma/client';
import { UpdateCareerDto } from './UpdateCareerDto';
import { CreateCareerDTO } from "./CreateCareerDTO";

@ApiTags('Careers')
@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  /**
   * Creates a new job posting.
   *
   * @param createCareerDto - The data transfer object containing job details.
   * @returns The created job.
   */
  @ApiOperation({ summary: 'Create a new job posting' })
  @ApiResponse({
    status: 201,
    description: 'The job has been successfully created.',
  })
  @Post()
  async create(@Body() createCareerDto: CreateCareerDTO): Promise<Jobs> {
    return await this.careersService.create(createCareerDto);
  }

  /**
   * Retrieves all job postings.
   *
   * @returns An array of job postings.
   */
  @ApiOperation({ summary: 'Get all job postings' })
  @ApiResponse({
    status: 200,
    description: 'List of jobs retrieved successfully.',
  })
  @Get()
  async findAll(): Promise<Jobs[]> {
    return await this.careersService.findAll();
  }

  /**
   * Retrieves a specific job posting by its ID.
   *
   * @param id - The unique identifier of the job.
   * @returns The job posting with the specified ID.
   */
  @ApiOperation({ summary: 'Get a job posting by ID' })
  @ApiResponse({ status: 200, description: 'Job retrieved successfully.' })
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Jobs> {
    return await this.careersService.findOne(id);
  }

  /**
   * Updates an existing job posting.
   *
   * @param id - The unique identifier of the job to update.
   * @param updateCareerDto - The data transfer object containing the updated fields.
   * @returns The updated job posting.
   */
  @ApiOperation({ summary: 'Update a job posting' })
  @ApiResponse({ status: 200, description: 'Job updated successfully.' })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCareerDto: UpdateCareerDto,
  ): Promise<Jobs> {
    return await this.careersService.update(id, updateCareerDto);
  }

  /**
   * Retrieves additional job postings categorized as "other jobs".
   *
   * @returns An array of job postings.
   */
  @ApiOperation({
    summary: 'Get additional job postings labeled as "other jobs"',
  })
  @ApiResponse({
    status: 200,
    description: 'Other jobs retrieved successfully.',
  })
  @Get('otherJobs')
  async getOtherJobs(): Promise<Jobs[]> {
    return await this.careersService.getOtherJobs();
  }
}
