import { Injectable } from "@nestjs/common";
import { Dutytemplate } from "./entities/dutytemplate.entity";
import { BaseService } from '../../common/base.service';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class DutytemplateRepository extends BaseService<Dutytemplate> {
  constructor(@InjectModel(Dutytemplate) private readonly dutytemplateModel: typeof Dutytemplate) {
    super(dutytemplateModel);
  }
}