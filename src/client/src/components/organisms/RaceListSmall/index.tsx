import React from 'react';
import format from 'date-fns/format';

import trackCode from '../../../constants/codes/track';
import { gradeOrJouken } from '../../../utils/code';

interface Race {
  id: number;
  number: number;
  ryakushou6: string;
  gradeCode: string;
  joukenCodeJy: string;
  trackCode: string;
  distance: number;
  tourokuTousuu: number;
  hassouTime: Date;
}

interface RaceItemProps {
  race: Race;
}

export const RaceItem: React.FC<RaceItemProps> = ({ race }) => (
  <tr>
    <td>{race.number}</td>
    <td>{race.ryakushou6}</td>
    <td>{gradeOrJouken(race)}</td>
    <td>{`${trackCode[race.trackCode].course}${race.distance}`}</td>
    <td>{race.tourokuTousuu}</td>
    <td>{`${format(race.hassouTime, 'HH:mm')}`}</td>
  </tr>
);

interface RaceListPresenterProps {
  races: Race[];
}

export const RaceListPresenter: React.FC<RaceListPresenterProps> = ({ races }) => (
  <table className="bp3-html-table bp3-html-table-condensed bp3-html-table-striped bp3-interactive">
    <thead>
      <tr>
        <th>R</th>
        <th>レース</th>
        <th>クラス</th>
        <th>コース</th>
        <th>頭</th>
        <th>発走</th>
      </tr>
    </thead>
    <tbody>
      {races.map(race => (
        <RaceItem key={race.id} race={race} />
      ))}
    </tbody>
  </table>
);
