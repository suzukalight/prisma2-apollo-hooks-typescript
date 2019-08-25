import isAfter from 'date-fns/is_after';

import { JvRaceOrYschGradeRace } from '../types/jra-van';

import gradeCode from '../constants/codes/grade';
import joukenCode from '../constants/codes/jouken';

export const gradeOrJouken = (race: JvRaceOrYschGradeRace): string => {
  if (race.gradeCode && gradeCode[race.gradeCode].ryaku) return gradeCode[race.gradeCode].ryaku;
  if ('joukenCodeJy' in race && joukenCode[race.joukenCodeJy].ryaku) {
    if (isAfter(race.raceDate, '2019-05-27')) {
      return joukenCode[race.joukenCodeJy].ryaku2019 || joukenCode[race.joukenCodeJy].ryaku;
    }
    return joukenCode[race.joukenCodeJy].ryaku;
  }
  return '';
};
