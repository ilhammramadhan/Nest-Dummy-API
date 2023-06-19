import { Injectable } from "@nestjs/common";
import { Teamrole } from "./entities/teamrole.entity";
import { BaseService } from '../../common/base.service';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class TeamroleRepository extends BaseService<Teamrole> {
  constructor(@InjectModel(Teamrole) private readonly teamroleModel: typeof Teamrole) {
    super(teamroleModel);
  }
}