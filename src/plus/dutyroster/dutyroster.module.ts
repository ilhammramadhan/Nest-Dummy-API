import { Module } from '@nestjs/common';
import { DutyrosterService } from './dutyroster.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dutyroster } from './entities/dutyroster.entity';

import { DutyrosterController } from './dutyroster.controller';
import { Dutytemplate } from '../dutytemplate/entities/dutytemplate.entity';
import { Iplm } from '../iplm/entities/iplm.entity';

@Module({
  imports: [SequelizeModule.forFeature([Dutyroster, Dutytemplate, Iplm])],
  controllers: [DutyrosterController],
  providers: [DutyrosterService]
})
export class DutyrosterModule {}
