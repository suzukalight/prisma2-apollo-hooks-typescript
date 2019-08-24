import { JvRaceOrYschGradeRace } from '../types/jra-van';

import gradeCode from '../constants/codes/grade';
import joukenCode from '../constants/codes/jouken';

export const gradeOrJouken = (race: JvRaceOrYschGradeRace) => {
  if (race.gradeCode && gradeCode[race.gradeCode].ryaku) return gradeCode[race.gradeCode].ryaku;
  if ('joukenCodeJy' in race && joukenCode[race.joukenCodeJy].ryaku)
    return joukenCode[race.joukenCodeJy].ryaku;
  return '';
};
