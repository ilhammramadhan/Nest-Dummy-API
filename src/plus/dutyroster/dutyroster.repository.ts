import { Injectable } from '@nestjs/common';
import { Dutyroster } from './entities/dutyroster.entity';
import { BaseService } from '../../common/base.service';
import { InjectModel } from '@nestjs/sequelize';
import { Dutytemplate } from '../dutytemplate/entities/dutytemplate.entity';
import { Model, ModelCtor } from 'sequelize-typescript';
import { Iplm } from '../iplm/entities/iplm.entity';

@Injectable()
export class DutyrosterRepository extends BaseService<Dutyroster> {
  protected dutyTemplateRepository: ModelCtor<Dutytemplate>;
  protected iplmRepository: ModelCtor<Iplm>;
  constructor(
    @InjectModel(Dutyroster)
    private readonly dutyrosterModel: typeof Dutyroster,
    @InjectModel(Dutytemplate)
    private readonly dutytemplateModel: typeof Dutytemplate,
    @InjectModel(Iplm)
    private readonly iplmModel: typeof Iplm,
  ) {
    super(dutyrosterModel);
    this.dutyTemplateRepository = dutytemplateModel;
    this.iplmRepository = iplmModel;
  }
}
