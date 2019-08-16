import Photon from "@generated/photon";
const photon = new Photon();

async function main() {
  const race1 = await photon.races.create({
    data: {
      raceId: "1999122606050809",
      createdAt: new Date(946134000000),
      raceDate: new Date(946134000000),
      courseCode: "06",
      kai: 5,
      nichi: 8,
      number: 9,
      hondai: "有馬記念",
      gradeCode: "A",
      joukenCodeJy: "999",
      distance: 2500,
      trackCode: "20",
      hassouTime: new Date(946134000000),
      tourokuTousuu: 15,
      shussouTousuu: 15
    }
  });

  const umaRace1 = await photon.umaRaces.create({
    data: {
      race: {
        connect: {
          id: race1.id
        }
      },
      umaRaceId: "19991226060508090100001",
      createdAt: new Date(946134000000),
      raceDate: new Date(946134000000),
      wakuban: 1,
      umaban: 1,
      name: "ナリタトップロード",
      sexCode: "1",
      keiroCode: "01",
      age: 4,
      tozaiCode: "2",
      choukyoushiRyakushou: "沖芳夫",
      futanJuuryou: 550,
      kishuRyakushou: "渡辺薫",
      odds: 68,
      ninki: 4,
    }
  });
  console.log({ race1 });
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
