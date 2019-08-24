import React from 'react';
import { storiesOf } from '@storybook/react';

import { JvYsch } from '../../../../types/jra-van';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';

import { RacingFixtures } from '..';

const yschs: JvYsch[] = [
  {
    id: 1,
    raceDate: new Date(1999, 0, 5),
    courseCode: '06',
    kai: 1,
    nichi: 1,
    number: 1,
    gradeRaces: [
      {
        hondai: '',
        ryakushou6: '中山金',
        gradeCode: 'C',
        shubetsuCode: '',
      },
    ],
  },
  {
    id: 2,
    raceDate: new Date(1999, 0, 5),
    courseCode: '08',
    kai: 1,
    nichi: 1,
    number: 1,
    gradeRaces: [
      {
        hondai: '',
        ryakushou6: '京都金',
        gradeCode: 'C',
        shubetsuCode: '',
      },
    ],
  },
  {
    id: 3,
    raceDate: new Date(1999, 0, 6),
    courseCode: '06',
    kai: 1,
    nichi: 2,
    number: 2,
  },
  {
    id: 4,
    raceDate: new Date(1999, 0, 6),
    courseCode: '08',
    kai: 1,
    nichi: 2,
    number: 2,
    gradeRaces: [
      {
        hondai: '',
        ryakushou6: 'シンザ',
        gradeCode: 'C',
        shubetsuCode: '',
      },
    ],
  },
  {
    id: 5,
    raceDate: new Date(1999, 0, 26),
    courseCode: '05',
    kai: 1,
    nichi: 2,
    number: 2,
  },
  {
    id: 6,
    raceDate: new Date(1999, 0, 26),
    courseCode: '07',
    kai: 1,
    nichi: 2,
    number: 2,
    gradeRaces: [
      {
        hondai: '',
        ryakushou6: '愛知杯',
        gradeCode: 'C',
        shubetsuCode: '',
      },
    ],
  },
  {
    id: 6,
    raceDate: new Date(1999, 0, 26),
    courseCode: '08',
    kai: 1,
    nichi: 2,
    number: 2,
  },
  {
    id: 98,
    raceDate: new Date(1999, 11, 26),
    courseCode: '06',
    kai: 5,
    nichi: 8,
    number: 1,
    gradeRaces: [
      {
        hondai: '',
        ryakushou6: '有馬記',
        gradeCode: 'A',
        shubetsuCode: '',
      },
    ],
  },
  {
    id: 99,
    raceDate: new Date(1999, 11, 26),
    courseCode: '09',
    kai: 5,
    nichi: 8,
    number: 1,
  },
];

storiesOf('organisms/RacingFixtures', module).add('correct', () => (
  <RacingFixtures yschs={yschs} />
));
