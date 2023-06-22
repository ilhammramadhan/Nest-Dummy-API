import { Injectable } from '@nestjs/common';
import { DutyrosterRepository } from './dutyroster.repository';
@Injectable()
export class DutyrosterService extends DutyrosterRepository {
  
  rootService() {
    // Run something from super or extends from Repository
    // Please dont override findAll, findOne, create, update, remove from this function
    this.JoinModel([])
  }
}