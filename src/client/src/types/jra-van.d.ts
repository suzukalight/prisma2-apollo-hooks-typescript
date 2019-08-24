export interface JvRace {
  id: number;
  number: number;
  ryakushou6: string;
  gradeCode: string;
  joukenCodeJy: string;
  trackCode: string;
  distance: number;
  tourokuTousuu: number;
  hassouTime: Date;
}

export interface JvYschGradeRace {
  hondai?: string;
  ryakushou6: string;
  gradeCode: string;
  shubetsuCode?: string;
  kigouCode?: string;
  juuryouCode?: string;
  distance?: number;
  trackCode?: string;
}

export interface JvYsch {
  id: number;
  raceDate: Date;
  courseCode: string;
  kai: number;
  nichi: number;
  number: number;
  gradeRaces?: JvYschGradeRace[];
}

export type JvRaceOrYschGradeRace = JvRace | JvYschGradeRace;
