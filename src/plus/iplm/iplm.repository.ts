import { Injectable } from '@nestjs/common';
import { Iplm } from './entities/iplm.entity';
import { BaseService } from '../../common/base.service';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class IplmRepository extends BaseService<Iplm> {
  constructor(@InjectModel(Iplm) iplmModel: typeof Iplm) {
    super(iplmModel);
  }
}
