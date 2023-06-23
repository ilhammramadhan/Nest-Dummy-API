import { SERVER_DATE_TIME_FORMAT } from './../../utils/constants';
import * as  moment from "moment"

export const getAllDaysOnWeeks = (days?: string) => {
  const dayOfWeeks = []
  const now = moment().format(SERVER_DATE_TIME_FORMAT)
  const currentDate = moment(days ?? now).format(SERVER_DATE_TIME_FORMAT)

  const startWeeks = moment(currentDate).startOf('isoWeek').format(SERVER_DATE_TIME_FORMAT)
  const endWeeks = moment(currentDate).endOf('isoWeek').format(SERVER_DATE_TIME_FORMAT)

  let currentDay = startWeeks
  while (moment(currentDay).isSameOrBefore(endWeeks, 'day')) {
    dayOfWeeks.push(currentDay)
    currentDay = moment(currentDay).add(1, 'day').format(SERVER_DATE_TIME_FORMAT)
  }

  return dayOfWeeks
}