import { Injectable } from '@nestjs/common';
import { TeamroleRepository } from './teamrole.repository';
@Injectable()
export class TeamroleService extends TeamroleRepository {
  
  rootService() {
    // Run something from super or extends from Repository
    // Please dont override findAll, findOne, create, update, remove from this function
    this.JoinModel([])
  }
}