interface JoukenCode {
  [key: string]: {
    full?: string;
    ryaku: string;
    en?: string;
  };
}

const joukenCode: JoukenCode = {
  '000': {
    ryaku: '不明',
  },
  '001': {
    ryaku: '100',
  },
  '005': {
    ryaku: '500',
  },
  '009': {
    ryaku: '900',
  },
  '016': {
    ryaku: '1600',
  },
  '701': {
    ryaku: '新馬',
  },
  '702': {
    ryaku: '未出走',
  },
  '703': {
    ryaku: '未勝利',
  },
  '999': {
    ryaku: 'OP',
  },
};

export default joukenCode;
