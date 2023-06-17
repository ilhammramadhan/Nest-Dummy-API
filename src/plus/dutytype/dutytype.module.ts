import { Module } from '@nestjs/common';
import { DutytypeService } from './dutytype.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Dutytype } from './entities/dutytype.entity';

import { DutytypeController } from './dutytype.controller';

@Module({
  imports: [SequelizeModule.forFeature([Dutytype])],
  controllers: [DutytypeController],
  providers: [DutytypeService]
})
export class DutytypeModule {}
