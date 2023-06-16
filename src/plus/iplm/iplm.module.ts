import { Module } from '@nestjs/common';
import { IplmService } from './iplm.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Iplm } from './entities/iplm.entity';

import { IplmController } from './iplm.controller';

@Module({
  imports: [SequelizeModule.forFeature([Iplm])],
  controllers: [IplmController],
  providers: [IplmService]
})
export class IplmModule {}
