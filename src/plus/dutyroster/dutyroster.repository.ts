import { Injectable } from "@nestjs/common";
import { Dutyroster } from "./entities/dutyroster.entity";
import { BaseService } from '../../common/base.service';
import { InjectModel } from '@nestjs/sequelize';


@Injectable()
export class DutyrosterRepository extends BaseService<Dutyroster> {
  constructor(@InjectModel(Dutyroster) private readonly dutyrosterModel: typeof Dutyroster) {
    super(dutyrosterModel);
  }
}