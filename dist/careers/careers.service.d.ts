import { DbService } from 'src/db/db.service';
import { ICareers } from './careers.interface';
import { Jobs } from '@prisma/client';
import { UpdateCareerDto } from './UpdateCareerDto';
export declare class CareersService implements ICareers {
    private readonly db;
    constructor(db: DbService);
    create(createJobsDto: CreateCareerDTO): Promise<Jobs>;
    findOne(id: string): Promise<Jobs>;
    findAll(): Promise<Jobs[]>;
    update(id: string, updateJobsDto: UpdateCareerDto): Promise<Jobs>;
    getOtherJobs(): Promise<Jobs[]>;
}
