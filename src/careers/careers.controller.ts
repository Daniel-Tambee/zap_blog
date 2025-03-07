import { Controller } from '@nestjs/common';
import { CareersService } from './careers.service';

@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}
}
