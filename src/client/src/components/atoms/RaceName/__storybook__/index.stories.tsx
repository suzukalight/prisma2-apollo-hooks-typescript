import React from 'react';
import { storiesOf } from '@storybook/react';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';

import RaceName from '..';

const racesKaisai = {
  raceDate: new Date(1999, 11, 26),
  courseCode: '06',
  kai: 5,
  nichi: 8,
};

const races = [
  {
    id: 1,
    ...racesKaisai,
    number: 1,
    ryakushou6: '',
    joukenCodeJy: '703',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1200,
    tourokuTousuu: 16,
    hassouTime: new Date(1999, 11, 26, 9, 50, 0),
  },
  {
    id: 2,
    ...racesKaisai,
    number: 2,
    ryakushou6: '',
    joukenCodeJy: '701',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1600,
    tourokuTousuu: 16,
    hassouTime: new Date(1999, 11, 26, 10, 20, 0),
  },
  {
    id: 4,
    ...racesKaisai,
    number: 4,
    ryakushou6: '',
    joukenCodeJy: '005',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1800,
    tourokuTousuu: 16,
    hassouTime: new Date(1999, 11, 26, 11, 30, 0),
  },
  {
    id: 5,
    ...racesKaisai,
    number: 5,
    ryakushou6: 'グッド',
    joukenCodeJy: '009',
    gradeCode: ' ',
    trackCode: '20',
    distance: 2500,
    tourokuTousuu: 11,
    hassouTime: new Date(1999, 11, 26, 12, 30, 0),
  },
  {
    id: 8,
    ...racesKaisai,
    number: 8,
    ryakushou6: 'フェア',
    joukenCodeJy: '016',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1800,
    tourokuTousuu: 11,
    hassouTime: new Date(1999, 11, 26, 14, 30, 0),
  },
  {
    id: 9,
    ...racesKaisai,
    number: 9,
    ryakushou6: '有馬記',
    joukenCodeJy: '999',
    gradeCode: 'A',
    trackCode: '20',
    distance: 2500,
    tourokuTousuu: 15,
    hassouTime: new Date(1999, 11, 26, 15, 20, 0),
  },
  {
    id: 10,
    ...racesKaisai,
    number: 10,
    ryakushou6: '',
    joukenCodeJy: '005',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1200,
    tourokuTousuu: 16,
    hassouTime: new Date(1999, 11, 26, 16, 0, 0),
  },
];

const racesKaisai20190623 = {
  raceDate: new Date(2019, 5, 23),
  courseCode: '09',
  kai: 3,
  nichi: 8,
};

const races20190623 = [
  {
    id: 1,
    ...racesKaisai20190623,
    number: 1,
    ryakushou6: '',
    joukenCodeJy: '703',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1400,
    tourokuTousuu: 16,
    hassouTime: new Date(2019, 5, 23, 10, 5, 0),
  },
  {
    id: 6,
    ...racesKaisai20190623,
    number: 6,
    ryakushou6: '',
    joukenCodeJy: '005',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1800,
    tourokuTousuu: 16,
    hassouTime: new Date(2019, 5, 23, 12, 55, 0),
  },
  {
    id: 9,
    ...racesKaisai20190623,
    number: 9,
    ryakushou6: '皆生特',
    joukenCodeJy: '010',
    gradeCode: ' ',
    trackCode: '17',
    distance: 1200,
    tourokuTousuu: 12,
    hassouTime: new Date(2019, 5, 23, 14, 25, 0),
  },
  {
    id: 10,
    ...racesKaisai20190623,
    number: 10,
    ryakushou6: '花のみ',
    joukenCodeJy: '016',
    gradeCode: ' ',
    trackCode: '24',
    distance: 1200,
    tourokuTousuu: 16,
    hassouTime: new Date(2019, 5, 23, 15, 1, 0),
  },
  {
    id: 11,
    ...racesKaisai20190623,
    number: 11,
    ryakushou6: '宝塚記',
    joukenCodeJy: '999',
    gradeCode: 'A',
    trackCode: '17',
    distance: 2200,
    tourokuTousuu: 12,
    hassouTime: new Date(2019, 5, 23, 15, 40, 0),
  },
];

storiesOf('atoms/RaceName', module)
  .add('1999-12-26', () =>
    races.map(race => (
      <div>
        <RaceName race={race} />
      </div>
    )),
  )
  .add('2019-06-23', () =>
    races20190623.map(race => (
      <div>
        <RaceName race={race} />
      </div>
    )),
  );
