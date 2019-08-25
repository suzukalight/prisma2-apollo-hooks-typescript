import React from 'react';
import format from 'date-fns/format';
import ja from 'date-fns/locale/ja';

import { JvYsch, JvYschGradeRace, JvRace } from '../../../types/jra-van';
import courseCode from '../../../constants/codes/course';
import { gradeOrJouken } from '../../../utils/code';
import { comparatorGradeAndJouken } from '../../../utils/comparators';

interface RacingFixturesItemPresenterProps {
  dateString: string;
  kaisais: JvYsch[];
  raceCount?: number;
  hasWin5?: boolean;
  mainRace?: JvYschGradeRace | JvRace;
}

export const RacingFixturesItemPresenter: React.FC<RacingFixturesItemPresenterProps> = ({
  dateString,
  kaisais,
  mainRace,
}) => (
  <tr>
    <td>{dateString}</td>
    <td>
      {kaisais
        .map(kaisai => `${kaisai.kai}${courseCode[kaisai.courseCode].ryaku1}${kaisai.nichi}`)
        .join(', ')}
    </td>
    <td>{mainRace && `${mainRace.ryakushou6} (${gradeOrJouken(mainRace)})`}</td>
  </tr>
);

interface RacingFixturesItemProps {
  yschsByDate: JvYsch[];
}

export const RacingFixturesItem: React.FC<RacingFixturesItemProps> = ({ yschsByDate }) => {
  if (!yschsByDate.length) return null;
  const { raceDate } = yschsByDate[0];
  const dateString = format(raceDate, 'M/D(dd)', { locale: ja });
  const mainRace = yschsByDate
    .map(y => y.gradeRaces)
    .flat()
    .sort(comparatorGradeAndJouken)[0];

  return (
    <RacingFixturesItemPresenter
      dateString={dateString}
      kaisais={yschsByDate}
      mainRace={mainRace}
    />
  );
};

interface RacingFixturesPresenterProps {
  yschsByDates: JvYsch[][];
}

export const RacingFixturesPresenter: React.FC<RacingFixturesPresenterProps> = ({
  yschsByDates,
}) => (
  <table className="bp3-html-table bp3-html-table-condensed bp3-html-table-striped bp3-interactive">
    <thead>
      <tr>
        <th>日付</th>
        <th>場所</th>
        <th>主なレース</th>
      </tr>
    </thead>
    <tbody>
      {yschsByDates.map(yschsByDate => (
        <RacingFixturesItem key={yschsByDate[0].id} yschsByDate={yschsByDate} />
      ))}
    </tbody>
  </table>
);

interface RacingFixturesProps {
  yschs: JvYsch[];
}

export const RacingFixtures: React.FC<RacingFixturesProps> = ({ yschs }) => {
  const yschsByDateMap: { [key: string]: JvYsch[] } = {};
  yschs.forEach(ysch => {
    const dateString = format(ysch.raceDate, 'YYYYMMDD');
    if (dateString in yschsByDateMap) yschsByDateMap[dateString].push(ysch);
    else yschsByDateMap[dateString] = [ysch];
  });
  const keys = Object.keys(yschsByDateMap).sort((a, b) => +a - +b);
  const yschsByDates = keys.map(key => yschsByDateMap[key]);

  return <RacingFixturesPresenter yschsByDates={yschsByDates} />;
};

export default RacingFixtures;
