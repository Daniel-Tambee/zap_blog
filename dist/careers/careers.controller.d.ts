import { CareersService } from './careers.service';
import { Jobs } from '@prisma/client';
import { UpdateCareerDto } from './UpdateCareerDto';
import { CreateCareerDTO } from "./CreateCareerDTO";
export declare class CareersController {
    private readonly careersService;
    constructor(careersService: CareersService);
    create(createCareerDto: CreateCareerDTO): Promise<Jobs>;
    findAll(): Promise<Jobs[]>;
    findOne(id: string): Promise<Jobs>;
    update(id: string, updateCareerDto: UpdateCareerDto): Promise<Jobs>;
    getOtherJobs(): Promise<Jobs[]>;
}
