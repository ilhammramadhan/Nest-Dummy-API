import { Module } from '@nestjs/common';
import { IplmroleService } from './iplmrole.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Iplmrole } from './entities/iplmrole.entity';

import { IplmroleController } from './iplmrole.controller';

@Module({
  imports: [SequelizeModule.forFeature([Iplmrole])],
  controllers: [IplmroleController],
  providers: [IplmroleService]
})
export class IplmroleModule {}
