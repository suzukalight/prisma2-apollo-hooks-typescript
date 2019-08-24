interface CourseCode {
  [key: string]: {
    full?: string;
    ryaku1?: string;
    ryaku2?: string;
    en?: string;
  };
}

const courseCode: CourseCode = {
  '01': {
    ryaku1: '札',
    ryaku2: '札幌',
  },
  '02': {
    ryaku1: '函',
    ryaku2: '函館',
  },
  '03': {
    ryaku1: '福',
    ryaku2: '福島',
  },
  '04': {
    ryaku1: '新',
    ryaku2: '新潟',
  },
  '05': {
    ryaku1: '東',
    ryaku2: '東京',
  },
  '06': {
    ryaku1: '中',
    ryaku2: '中山',
  },
  '07': {
    ryaku1: '名',
    ryaku2: '中京',
  },
  '08': {
    ryaku1: '京',
    ryaku2: '京都',
  },
  '09': {
    ryaku1: '阪',
    ryaku2: '阪神',
  },
  '10': {
    ryaku1: '小',
    ryaku2: '小倉',
  },
};

export default courseCode;
