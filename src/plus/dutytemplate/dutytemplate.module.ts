import { Module } from '@nestjs/common';
import { DutytemplateService } from './dutytemplate.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dutytemplate } from './entities/dutytemplate.entity';

import { DutytemplateController } from './dutytemplate.controller';

@Module({
  imports: [SequelizeModule.forFeature([Dutytemplate])],
  controllers: [DutytemplateController],
  providers: [DutytemplateService]
})
export class DutytemplateModule {}
