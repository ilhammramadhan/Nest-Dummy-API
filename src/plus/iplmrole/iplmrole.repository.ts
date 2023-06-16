import { Injectable } from "@nestjs/common";
import { Iplmrole } from "./entities/iplmrole.entity";
import { BaseService } from '../../common/base.service';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class IplmroleRepository extends BaseService<Iplmrole> {
  constructor(@InjectModel(Iplmrole) private readonly iplmroleModel: typeof Iplmrole) {
    super(iplmroleModel);
  }
}