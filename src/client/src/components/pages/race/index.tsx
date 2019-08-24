import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Race from '../../organisms/Race';

import { JvRace } from '../../../types/jra-van';

interface RaceData {
  race: JvRace;
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

  return <Race race={data.race} />;
};

export default RacePage;
