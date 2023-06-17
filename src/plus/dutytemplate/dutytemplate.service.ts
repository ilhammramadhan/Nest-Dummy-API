import { Injectable } from '@nestjs/common';
import { DutytemplateRepository } from './dutytemplate.repository';
@Injectable()
export class DutytemplateService extends DutytemplateRepository {
  
  rootService() {
    // Run something from super or extends from Repository
    // Please dont override findAll, findOne, create, update, remove from this function
    this.JoinModel([])
  }
}