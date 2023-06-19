import { Teamrole } from './../teamrole/entities/teamrole.entity';
import { Iplmrole } from './../iplmrole/entities/iplmrole.entity';
import { Injectable } from '@nestjs/common';
import { IplmRepository } from './iplm.repository';
import { Team } from '../team/entities/team.entity';
@Injectable()
export class IplmService extends IplmRepository {
  rootService() {
    // Run something from super or extends from Repository
    // Please dont override findAll, findOne, create, update, remove from this function
    this.JoinModel([
      Iplmrole,
      Team,
      Teamrole
    ]);
  }
}
