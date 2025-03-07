import { Jobs } from '@prisma/client';
import { UpdateCareerDto } from './UpdateCareerDto';
import { CreateCareerDTO } from './CreateCareerDTO';
export interface ICareers {
    create(createJobsDto: CreateCareerDTO): any;
    findOne(id: string): Promise<Jobs>;
    findAll(): Promise<Jobs[]>;
    update(id: string, updateJobsDto: UpdateCareerDto): Promise<Jobs>;
    getOtherJobs(): Promise<Jobs[]>;
}
