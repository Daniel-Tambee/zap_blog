import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { ICareers } from './careers.interface';
import { Jobs } from '@prisma/client';
import { UpdateCareerDto } from './UpdateCareerDto';

@Injectable()
export class CareersService implements ICareers {
  /**
   *
   */
  constructor(private readonly db: DbService) {}
  create(createJobsDto: CreateCareerDTO): Promise<Jobs> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<Jobs> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Jobs[]> {
    throw new Error('Method not implemented.');
  }
  update(id: string, updateJobsDto: UpdateCareerDto): Promise<Jobs> {
    throw new Error('Method not implemented.');
  }
  getOtherJobs(): Promise<Jobs[]> {
    throw new Error('Method not implemented.');
  }
}
