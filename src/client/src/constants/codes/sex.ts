interface SexCode {
  [key: string]: {
    full?: string;
    ryaku1?: string;
    ryaku2?: string;
    en?: string;
  };
}

const sexCode: SexCode = {
  '1': {
    ryaku1: '牡',
    ryaku2: '牡馬',
  },
  '2': {
    ryaku1: '牝',
    ryaku2: '牝馬',
  },
  '3': {
    ryaku1: 'セ',
    ryaku2: 'セン',
  },
};

export default sexCode;
