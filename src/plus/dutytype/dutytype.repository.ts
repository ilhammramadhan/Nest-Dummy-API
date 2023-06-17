import { Injectable } from "@nestjs/common";
import { Dutytype } from "./entities/dutytype.entity";
import { BaseService } from '../../common/base.service';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class DutytypeRepository extends BaseService<Dutytype> {
  constructor(@InjectModel(Dutytype) private readonly dutytypeModel: typeof Dutytype) {
    super(dutytypeModel);
  }
}