import React from 'react';
import { storiesOf } from '@storybook/react';

import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/table/lib/css/table.css';

import { JvRace } from '../../../../types/jra-van';

import { RacePresenter } from '..';

const race: JvRace = {
  id: 9,
  raceDate: new Date(1999, 11, 26),
  number: 9,
  hondai: '有馬記念',
  ryakushou6: '有馬記',
  joukenCodeJy: '999',
  gradeCode: 'A',
  trackCode: '20',
  distance: 2500,
  tourokuTousuu: 15,
  hassouTime: new Date(1999, 11, 26, 15, 20, 0),
  umaRaces: [
    {
      id: 1,
      age: 3,
      name: 'ナリタトップロード',
      sexCode: '1',
      wakuban: 1,
      umaban: 1,
    },
    {
      id: 3,
      age: 4,
      name: 'スペシャルウィーク',
      sexCode: '1',
      wakuban: 2,
      umaban: 3,
    },
    {
      id: 5,
      age: 5,
      name: 'ステイゴールド',
      sexCode: '1',
      wakuban: 3,
      umaban: 5,
    },
    {
      id: 7,
      age: 4,
      name: 'グラスワンダー',
      sexCode: '1',
      wakuban: 4,
      umaban: 7,
    },
    {
      id: 9,
      age: 3,
      name: 'フサイチエアデール',
      sexCode: '2',
      wakuban: 5,
      umaban: 9,
    },
    {
      id: 11,
      age: 3,
      name: 'テイエムオペラオー',
      sexCode: '1',
      wakuban: 6,
      umaban: 11,
    },
    {
      id: 13,
      age: 5,
      name: 'メジロブライト',
      sexCode: '1',
      wakuban: 7,
      umaban: 13,
    },
    {
      id: 14,
      age: 6,
      name: 'ゴーイングスズカ',
      sexCode: '1',
      wakuban: 8,
      umaban: 14,
    },
  ],
};

storiesOf('organisms/Race', module).add('correct', () => <RacePresenter race={race} />);
