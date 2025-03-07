import { Module } from '@nestjs/common';
import { CareersService } from './careers.service';
import { CareersController } from './careers.controller';
import { DbService } from 'src/db/db.service';

@Module({
  controllers: [CareersController],
  providers: [CareersService, DbService],
})
export class CareersModule {}
