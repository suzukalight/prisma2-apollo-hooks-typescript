import React from 'react';
import format from 'date-fns/format';

import { JvRace } from '../../../types/jra-van';

import RaceName from '../../atoms/RaceName';

import trackCode from '../../../constants/codes/track';
import courseCode from '../../../constants/codes/course';

import styles from './index.module.scss';

interface RacingProgramPresenterProps {
  races: JvRace[];
}

export const RacingProgramPresenter: React.FC<RacingProgramPresenterProps> = ({ races }) => (
  <div className={styles.root}>
    <div>
      <h3>{`${races[0].kai}回${courseCode[races[0].courseCode || ''].ryaku2}${races[0].nichi}日`}</h3>
    </div>
    <table className="bp3-html-table bp3-html-table-condensed bp3-html-table-striped bp3-interactive">
      <thead>
        <tr>
          <th>R</th>
          <th>レース</th>
          <th>コース</th>
          <th>発走</th>
        </tr>
      </thead>
      <tbody>
        {races.map(race => (
          <tr>
            <td>{race.number}</td>
            <td>
              <RaceName race={race} />
            </td>
            <td>{`${trackCode[race.trackCode].course}${race.distance}`}</td>
            <td>{`${format(race.hassouTime, 'HH:mm')}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

interface RacingProgramAdapterProps {
  presenter?: React.FC<RacingProgramPresenterProps>;
  races: JvRace[];
}

export const RacingProgramAdapter: React.FC<RacingProgramAdapterProps> = ({
  presenter = RacingProgramPresenter,
  races,
}) => {
  if (!races || !races.length) return null;

  const racesSorted = (races || []).slice().sort((a, b) => a.number - b.number);
  return presenter({ races: racesSorted });
};

export default RacingProgramAdapter;
