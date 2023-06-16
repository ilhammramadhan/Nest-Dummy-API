import { Injectable } from '@nestjs/common';
import { IplmroleRepository } from './iplmrole.repository';
@Injectable()
export class IplmroleService extends IplmroleRepository {
  
  rootService() {
    // Run something from super or extends from Repository
    // Please dont override findAll, findOne, create, update, remove from this function
    this.JoinModel([])
  }
}