import React from 'react';
import format from 'date-fns/format';

import { JvRace } from '../../../types/jra-van';
import trackCode from '../../../constants/codes/track';
import sexCode from '../../../constants/codes/sex';

import styles from './index.module.scss';

interface EntryListPresenterProps {
  race: JvRace;
}

export const EntryListPresenter: React.FC<EntryListPresenterProps> = ({ race }) => (
  <div className={styles.root}>
    <div className="head">
      <p className={styles.noMargin}>{format(race.raceDate, 'YYYY年M月D日')}</p>
      <h1 className={styles.noMargin}>{race.hondai}</h1>
      <p>{`${trackCode[race.trackCode].course}${race.distance}m`}</p>
    </div>
    <hr />
    <div className="body">
      <table className="bp3-html-table bp3-html-table-condensed bp3-html-table-striped bp3-interactive">
        <thead>
          <tr>
            <th>枠</th>
            <th>番</th>
            <th>馬名</th>
            <th>性</th>
            <th>齢</th>
          </tr>
        </thead>
        <tbody>
          {(race.umaRaces || []).map(umaRace => (
            <tr key={umaRace.id}>
              <td>{umaRace.wakuban}</td>
              <td>{umaRace.umaban}</td>
              <td>{umaRace.name}</td>
              <td>{sexCode[umaRace.sexCode].ryaku1}</td>
              <td>{umaRace.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default EntryListPresenter;
