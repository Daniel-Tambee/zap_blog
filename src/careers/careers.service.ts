import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ICareers } from './careers.interface';
import { Jobs } from '@prisma/client';
import { UpdateCareerDto } from './UpdateCareerDto';
import { CreateCareerDTO } from './CreateCareerDTO';

@Injectable()
export class CareersService implements ICareers {
  constructor(private readonly db: DbService) {}

  // Method to create a new job posting
  async create(createJobsDto: CreateCareerDTO): Promise<Jobs> {
    try {
      // Create a new job entry in the database using the provided DTO
      const newJob = await this.db.jobs.create({
        data: createJobsDto,
      });
      return newJob;
    } catch (error) {
      console.error('Error creating job:', error);
      throw new Error('Failed to create job');
    }
  }

  // Method to fetch a specific job by its ID
  async findOne(id: string): Promise<Jobs> {
    try {
      const job = await this.db.jobs.findUnique({
        where: { id },
      });
      if (!job) {
        throw new Error('Job not found');
      }
      return job;
    } catch (error) {
      console.error(`Error fetching job with ID ${id}:`, error);
      throw new Error('Failed to fetch job');
    }
  }

  // Method to fetch all jobs
  async findAll(): Promise<Jobs[]> {
    try {
      const jobs = await this.db.jobs.findMany();
      return jobs;
    } catch (error) {
      console.error('Error fetching all jobs:', error);
      throw new Error('Failed to fetch jobs');
    }
  }

  // Method to update an existing job
  async update(id: string, updateJobsDto: UpdateCareerDto): Promise<Jobs> {
    try {
      const updatedJob = await this.db.jobs.update({
        where: { id },
        data: updateJobsDto,
      });
      return updatedJob;
    } catch (error) {
      console.error(`Error updating job with ID ${id}:`, error);
      throw new Error('Failed to update job');
    }
  }

  // Method to fetch other jobs (perhaps different categories or types of jobs)
  async getOtherJobs(): Promise<Jobs[]> {
    try {
      // This can be customized based on the "other jobs" definition (e.g., jobs from a different category)
      const otherJobs = await this.db.jobs.findMany({});
      return otherJobs;
    } catch (error) {
      console.error('Error fetching other jobs:', error);
      throw new Error('Failed to fetch other jobs');
    }
  }
}
