import { JvRaceOrYschGradeRace } from '../types/jra-van';

import gradeCode from '../constants/codes/grade';

export const comparatorGradeAndJouken = (
  a: JvRaceOrYschGradeRace,
  b: JvRaceOrYschGradeRace,
): number => {
  const gradeA = gradeCode[a.gradeCode].ryaku;
  const gradeB = gradeCode[b.gradeCode].ryaku;
  if (gradeA && !gradeB) return 1;
  if (!gradeA && gradeB) return -1;
  if (gradeA && gradeB) return a.gradeCode.localeCompare(b.gradeCode);

  let joukenA = 'joukenCodeJy' in a ? +a.joukenCodeJy : -10000;
  let joukenB = 'joukenCodeJy' in b ? +b.joukenCodeJy : -10000;
  if (joukenA >= 700 && joukenA < 800) joukenA -= 1000;
  if (joukenB >= 700 && joukenB < 800) joukenB -= 1000;
  return joukenA - joukenB;
};
