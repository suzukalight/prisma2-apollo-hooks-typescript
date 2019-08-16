import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
const { Pane, Heading, Paragraph, Table } = require("evergreen-ui");

interface UmaRace {
  age: number; // Int!
  id: number; // Int!
  name: string; // String!
  sexCode: string; // String!
  umaban: number; // Int!
  wakuban: number; // Int!
}

interface Race {
  distance: number; // Int!
  hondai: string; // String!
  id: number; // Int!
  raceDate: any; // DateTime!
  umaRaces: [UmaRace]; // [UmaRace!]
}

type RacePresenterProps = {
  race: Race;
};

const RacePresenter: React.FC<RacePresenterProps> = ({ race }) => (
  <Pane padding={16}>
    <Pane background="tint2">
      <Heading size={700}>{race.hondai}</Heading>
      <Paragraph>{`${race.distance}m`}</Paragraph>
    </Pane>
    <Pane background="white" marginTop={24}>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell flexBasis={48} flexGrow={0}>枠</Table.TextHeaderCell>
          <Table.TextHeaderCell>番</Table.TextHeaderCell>
          <Table.TextHeaderCell>馬名</Table.TextHeaderCell>
          <Table.TextHeaderCell>性</Table.TextHeaderCell>
          <Table.TextHeaderCell>齢</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
          {(race.umaRaces || []).map(umaRace => (
            <Table.Row key={umaRace.id}>
              <Table.TextCell flexBasis={48} flexGrow={0} isNumber background="black">{umaRace.wakuban}</Table.TextCell>
              <Table.TextCell isNumber>{umaRace.umaban}</Table.TextCell>
              <Table.TextCell>{umaRace.name}</Table.TextCell>
              <Table.TextCell>{umaRace.sexCode}</Table.TextCell>
              <Table.TextCell isNumber>{umaRace.age}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Pane>
  </Pane>
);

interface RaceData {
  race: Race;
}

interface RaceVars {
  where: {
    id: number;
  };
}

type RacePageProps = {
  id: number;
};

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
  const { loading, data } = useQuery<RaceData, RaceVars>(GET_RACE, {
    variables: { where: { id } }
  });

  console.log("loading, data: ", loading, data);
  if (loading) return null;
  if (!data) return null;

  return <RacePresenter race={data.race} />;
};

export default RacePage;
