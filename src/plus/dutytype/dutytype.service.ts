import { Injectable } from '@nestjs/common';
import { DutytypeRepository } from './dutytype.repository';
@Injectable()
export class DutytypeService extends DutytypeRepository {
  
  rootService() {
    // Run something from super or extends from Repository
    // Please dont override findAll, findOne, create, update, remove from this function
    this.JoinModel([])
  }
}