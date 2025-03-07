import { UpdateCareerDto } from './UpdateCareerDto';

export interface Careers {
  create(createPostDto: CreateCareerDTO);

  findOne(id: string);
  findAll();

  update(id: string, updateCareerDto: UpdateCareerDto);
  getOtheroles(): Promise<Careers[]>;
}
