import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import format from 'date-fns/format';

import sexCode from '../../../constants/codes/sex';

import styles from './index.module.scss';

interface UmaRace {
  age: number;
  id: number;
  name: string;
  sexCode: string;
  umaban: number;
  wakuban: number;
}

interface Race {
  distance: number;
  hondai: string;
  id: number;
  raceDate: any;
  umaRaces: UmaRace[];
}

interface RacePresenterProps {
  race: Race;
}

const convertSexCode = (code: string) => {
  if (code === '1') return '牡';
  if (code === '2') return '牝';
  return '';
};

const RacePresenter: React.FC<RacePresenterProps> = ({ race }) => (
  <div className={styles.root}>
    <div className="head">
      <p className={styles.noMargin}>{format(race.raceDate, 'YYYY年M月D日')}</p>
      <h1 className={styles.noMargin}>{race.hondai}</h1>
      <p>{`${race.distance}m`}</p>
    </div>
    <hr />
    <div className="body">
      <table className="bp3-html-table bp3-html-table-condensed">
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

interface RaceData {
  race: Race;
}

interface RaceVars {
  where: {
    id: number;
  };
}

interface RacePageProps {
  id: number;
}

const GET_RACE = gql`
  query getRace($where: RaceWhereUniqueInput!) {
    race(where: $where) {
      id
      raceDate
      distance
      hondai
      umaRaces {
        id
        wakuban
        umaban
        name
        sexCode
        age
      }
    }
  }
`;

const RacePage: React.FC<RacePageProps> = ({ id }) => {
  const { loading, error, data } = useQuery<RaceData, RaceVars>(GET_RACE, {
    variables: { where: { id } },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  if (!data) return null;

  return <RacePresenter race={data.race} />;
};

export default RacePage;
