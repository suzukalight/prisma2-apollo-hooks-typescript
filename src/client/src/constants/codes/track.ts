interface TrackCode {
  [key: string]: {
    full?: string;
    ryaku6?: string;
    course: string;
    turn?: string;
    turnDesc?: string;
    en?: string;
  };
}

const trackCode: TrackCode = {
  10: {
    full: '平地　芝　直線',
    ryaku6: '芝・直',
    course: '芝',
    turn: '直',
    turnDesc: '',
    en: 'Turf Str.',
  },
  11: {
    full: '平地　芝　左回り',
    ryaku6: '芝・左',
    course: '芝',
    turn: '左',
    turnDesc: '',
    en: 'Turf',
  },
  12: {
    ryaku6: '芝・左外',
    course: '芝',
  },
  13: {
    ryaku6: '芝・左内→外',
    course: '芝',
  },
  14: {
    ryaku6: '芝・左外→内',
    course: '芝',
  },
  15: {
    ryaku6: '芝・左内2周',
    course: '芝',
  },
  16: {
    ryaku6: '芝・左外2周',
    course: '芝',
  },
  17: {
    ryaku6: '芝・右',
    course: '芝',
  },
  18: {
    ryaku6: '芝・右外',
    course: '芝',
  },
  19: {
    ryaku6: '芝・右内→外',
    course: '芝',
  },
  20: {
    ryaku6: '芝・右外→内',
    course: '芝',
  },
  21: {
    ryaku6: '芝・右内2周',
    course: '芝',
  },
  22: {
    ryaku6: '芝・右外2周',
    course: '芝',
  },
  23: {
    ryaku6: 'ダ・左',
    course: 'ダ',
  },
  24: {
    ryaku6: 'ダ・右',
    course: 'ダ',
  },
  25: {
    course: 'ダ',
  },
  26: {
    course: 'ダ',
  },
  27: {
    course: 'サ',
  },
  28: {
    course: 'サ',
  },
  29: {
    ryaku6: 'ダ・直',
    course: 'ダ',
  },
  51: {
    course: '障',
  },
  52: {
    course: '障',
  },
  53: {
    course: '障',
  },
  54: {
    course: '障',
  },
  55: {
    course: '障',
  },
  56: {
    course: '障',
  },
  57: {
    course: '障',
  },
  58: {
    course: '障',
  },
  59: {
    course: '障',
  },
};

export default trackCode;
