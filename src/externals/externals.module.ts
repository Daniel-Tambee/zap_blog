import { Module } from '@nestjs/common';
import { ExternalsController } from './externals.controller';
import { ExternalsService } from './externals.service';
import { DbService } from 'src/db/db.service';

@Module({
    controllers: [ExternalsController],
    providers: [ExternalsService, DbService],
  
})
export class ExternalsModule {}
