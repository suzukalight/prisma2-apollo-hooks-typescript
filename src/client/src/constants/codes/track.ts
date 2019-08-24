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
    course: '芝',
  },
  13: {
    course: '芝',
  },
  14: {
    course: '芝',
  },
  15: {
    course: '芝',
  },
  16: {
    course: '芝',
  },
  17: {
    course: '芝',
  },
  18: {
    course: '芝',
  },
  19: {
    course: '芝',
  },
  20: {
    course: '芝',
  },
  21: {
    course: '芝',
  },
  22: {
    course: '芝',
  },
  23: {
    course: 'ダ',
  },
  24: {
    course: 'ダ',
  },
  25: {
    course: 'ダ',
  },
  26: {
    course: 'ダ',
  },
  27: {
    course: 'ダ',
  },
  28: {
    course: 'ダ',
  },
  29: {
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
