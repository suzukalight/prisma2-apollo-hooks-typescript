import React from 'react';

import { JvRaceOrYschGradeRace } from '../../../types/jra-van';

import { gradeOrJouken } from '../../../utils/code';

import styles from './index.module.scss';

interface RaceNameProps {
  race: JvRaceOrYschGradeRace;
}

const RaceName: React.FC<RaceNameProps> = ({ race }) =>
  race.ryakushou6 ? (
    <span>
      {`${race.ryakushou6}`}
      <small className={styles.class}>{`(${gradeOrJouken(race)})`}</small>
    </span>
  ) : (
    <span>{gradeOrJouken(race)}</span>
  );

export default RaceName;
