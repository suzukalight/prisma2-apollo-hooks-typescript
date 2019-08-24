import React from 'react';
import { storiesOf } from '@storybook/react';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';

import { RaceListPresenter } from '..';

const races = [
  {
    id: 1,
    number: 1,
    ryakushou6: '',
    joukenCodeJy: '703',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1200,
    tourokuTousuu: 16,
    hassouTime: new Date(2019, 2, 1, 9, 50, 0),
  },
  {
    id: 2,
    number: 2,
    ryakushou6: '',
    joukenCodeJy: '701',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1600,
    tourokuTousuu: 16,
    hassouTime: new Date(2019, 2, 1, 10, 20, 0),
  },
  {
    id: 4,
    number: 4,
    ryakushou6: '',
    joukenCodeJy: '005',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1800,
    tourokuTousuu: 16,
    hassouTime: new Date(2019, 2, 1, 11, 30, 0),
  },
  {
    id: 8,
    number: 8,
    ryakushou6: 'フェア',
    joukenCodeJy: '016',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1800,
    tourokuTousuu: 11,
    hassouTime: new Date(2019, 2, 1, 14, 30, 0),
  },
  {
    id: 9,
    number: 9,
    ryakushou6: '有馬記',
    joukenCodeJy: '999',
    gradeCode: 'A',
    trackCode: '20',
    distance: 2500,
    tourokuTousuu: 15,
    hassouTime: new Date(2019, 2, 1, 15, 20, 0),
  },
  {
    id: 10,
    number: 10,
    ryakushou6: '',
    joukenCodeJy: '005',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1200,
    tourokuTousuu: 16,
    hassouTime: new Date(2019, 2, 1, 16, 0, 0),
  },
];

storiesOf('organisms/RaceListSmall', module).add('correct', () => (
  <RaceListPresenter races={races} />
));
