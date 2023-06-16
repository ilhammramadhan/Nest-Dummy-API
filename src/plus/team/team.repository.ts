import { Injectable } from "@nestjs/common";
import { Team } from "./entities/team.entity";
import { BaseService } from '../../common/base.service';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class TeamRepository extends BaseService<Team> {
  constructor(@InjectModel(Team) private readonly teamModel: typeof Team) {
    super(teamModel);
  }
}