import { Module } from '@nestjs/common';
import { TeamroleService } from './teamrole.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Teamrole } from './entities/teamrole.entity';

import { TeamroleController } from './teamrole.controller';

@Module({
  imports: [SequelizeModule.forFeature([Teamrole])],
  controllers: [TeamroleController],
  providers: [TeamroleService]
})
export class TeamroleModule {}
