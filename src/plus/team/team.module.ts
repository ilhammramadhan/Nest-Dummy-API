import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from './entities/team.entity';

import { TeamController } from './team.controller';

@Module({
  imports: [SequelizeModule.forFeature([Team])],
  controllers: [TeamController],
  providers: [TeamService]
})
export class TeamModule {}
