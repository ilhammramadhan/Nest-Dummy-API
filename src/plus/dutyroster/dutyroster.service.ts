import { Dutyroster } from './entities/dutyroster.entity';
import { IResponse } from './../../common/response';
import { SERVER_DATE_TIME_FORMAT } from './../../utils/constants';
import { Injectable } from '@nestjs/common';
import { DutyrosterRepository } from './dutyroster.repository';
import _ from 'lodash';
import * as moment from 'moment';
import { getAllDaysOnWeeks } from '../functions';
import { Model, ModelCtor } from 'sequelize-typescript';
import { Dutytemplate } from '../dutytemplate/entities/dutytemplate.entity';
import { Iplm } from '../iplm/entities/iplm.entity';
@Injectable()
export class DutyrosterService extends DutyrosterRepository {
  rootService() {
    // Run something from super or extends from Repository
    // Please dont override findAll, findOne, create, update, remove from this function
    this.JoinModel([]);
  }

  async generatePLM(data?: any) {
    const listPlm = await this.iplmRepository.findAll();
    const allDayOnWeeks = getAllDaysOnWeeks(data.date);
    const listDutyRoster = await super.findAll({
      $limit: 1000,
      $skip: 0,
      duty_start_date: {
        $gte: moment(allDayOnWeeks[0]).format(SERVER_DATE_TIME_FORMAT),
      },
      duty_end_date: {
        $lte: moment(allDayOnWeeks[allDayOnWeeks.length - 1]).format(
          'YYYY-MM-DDT23:59:59',
        ),
      },
      type: 'duty',
      status: 'draft',
    });

    let assignedPLM = [];

    // Collect all data in dutyroster if already assigned PLM
    for (const roster of listDutyRoster.data) {
      const content = JSON.parse(roster.dataValues.duty_template_content);
      const { list_plm_duty = null } = content;

      if (list_plm_duty) {
        const parseAllPLM = JSON.parse(list_plm_duty);
        console.log({ parseAllPLM });
        parseAllPLM.forEach((plm) => {
          assignedPLM.push({
            roster_id: roster.dataValues._id,
            plm_code: plm.code,
            has_new: false,
          });
        });
      }
    }

    // Collect all not assigned PLM
    for (const roster of listDutyRoster.data) {
      const content = JSON.parse(roster.dataValues.duty_template_content);
      const { duty_type, list_plm_duty = null, no_plm_required_duty } = content;
      let indexOfAvailablePLM = 1;
      if (list_plm_duty) {
        const parseAllPLM = JSON.parse(list_plm_duty);
        indexOfAvailablePLM = parseAllPLM.length + 1;
      }

      // Looping required PLM to find PLM match duty type and available
      for (let i = indexOfAvailablePLM; i <= no_plm_required_duty; i++) {
        const findDutyMatchPLM = listPlm.find((plm) => {
          const plmDuty = plm.dataValues.duty_type;
          return (
            plmDuty === duty_type &&
            !assignedPLM.find(
              (assigned) =>
                assigned.plm_code === plm.dataValues.code
            )
          );
        });
        if (findDutyMatchPLM) {
          assignedPLM.push({
            roster_id: roster.dataValues._id,
            plm_code: findDutyMatchPLM.dataValues.code,
            has_new: true,
          });
        }
      }

      const assignedPLMInRoster = assignedPLM.filter(
        (plm) => plm.roster_id === roster.dataValues._id && plm.has_new,
      );
      console.log({ assignedPLMInRoster });

      if (assignedPLMInRoster.length > 0) {
        let newPLMDuty = [
          ...assignedPLMInRoster.map((plm) => {
            return listPlm.find(
              (plmData) => plmData.dataValues.code === plm.plm_code,
            );
          })
        ]

        const oldListPLMDuty: any[] = JSON.parse(list_plm_duty)
        
        if (oldListPLMDuty && oldListPLMDuty.length > 0) {
          newPLMDuty = [
            ...oldListPLMDuty,
            ...newPLMDuty
          ]
        }

        const newData = {
          duty_template_content: JSON.stringify({
            ...content,
            list_plm_duty: JSON.stringify(newPLMDuty),
          }),
        };
        await super.update(roster.dataValues._id, newData);
      }
    }

    const newDutyRoster = await super.findAll()

    return newDutyRoster
  }
}
