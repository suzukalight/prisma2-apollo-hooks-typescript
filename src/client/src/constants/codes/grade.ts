interface GradeCode {
  [key: string]: {
    full?: string;
    ryaku?: string;
  };
}

const gradeCode: GradeCode = {
  A: {
    ryaku: 'G1',
  },
  B: {
    ryaku: 'G2',
  },
  C: {
    ryaku: 'G3',
  },
  D: {
    ryaku: '重',
  },
  E: {
    ryaku: '特',
  },
  F: {
    ryaku: 'JG1',
  },
  G: {
    ryaku: 'JG2',
  },
  H: {
    ryaku: 'JG3',
  },
  L: {
    ryaku: 'L',
  },
  ' ': {
    ryaku: '',
  },
};

export default gradeCode;
