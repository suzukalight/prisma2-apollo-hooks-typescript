interface JoukenCode {
  [key: string]: {
    full?: string;
    full2019?: string;
    ryaku: string;
    ryaku2019?: string;
    en?: string;
  };
}

const joukenCode: JoukenCode = {
  '000': {
    ryaku: '不明',
    ryaku2019: '不明',
  },
  '004': {
    full: '400万下',
    ryaku: '400',
  },
  '005': {
    full: '500万下',
    ryaku: '500',
    full2019: '1勝クラス',
    ryaku2019: '1勝',
  },
  '009': {
    full: '900万下',
    ryaku: '900',
  },
  '010': {
    full: '1000万下',
    ryaku: '1000',
    full2019: '2勝クラス',
    ryaku2019: '2勝',
  },
  '014': {
    full: '1400万下',
    ryaku: '1400',
  },
  '015': {
    full: '1500万下',
    ryaku: '1500',
  },
  '016': {
    full: '1600万下',
    ryaku: '1600',
    full2019: '3勝クラス',
    ryaku2019: '3勝',
  },
  '701': {
    ryaku: '新馬',
    ryaku2019: '新馬',
  },
  '702': {
    ryaku: '未出走',
    ryaku2019: '未出走',
  },
  '703': {
    ryaku: '未勝利',
    ryaku2019: '未勝利',
  },
  '999': {
    ryaku: 'OP',
    ryaku2019: 'OP',
  },
};

export default joukenCode;
