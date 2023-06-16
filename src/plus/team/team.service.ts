import { Injectable } from '@nestjs/common';
import { TeamRepository } from './team.repository';
@Injectable()
export class TeamService extends TeamRepository {
  
  rootService() {
    // Run something from super or extends from Repository
    // Please dont override findAll, findOne, create, update, remove from this function
    this.JoinModel([])
  }
}