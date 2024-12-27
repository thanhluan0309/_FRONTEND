import { MapViewMatches } from "../../data/data";
import { EnumRs } from "../../Enum/Enum";
import { ICON_NOTHING } from "../../assets/Icon/Icon";

import { DataLogo } from "../../data/data";
import { useState } from "react";
const Matches = ({ stateMatches }) => {
  const [stateMatch, setStateMatch] = useState(
    stateMatches?.data?.events || []
  );
  const MapData = MapViewMatches();
  let A = [];
  const getTeamData = (teamName) => {
    return DataLogo.find((team) => team.name === teamName) || null;
  };
  const updatedA = stateMatch.map((b, index) => {
    const homeScore = parseInt(b.homeScore.current);
    const awayScore = parseInt(b.awayScore.current);

    const resultHome =
      homeScore > awayScore
        ? EnumRs.win
        : homeScore === awayScore
        ? EnumRs.draw
        : EnumRs.lose;
    const resultAway =
      awayScore > homeScore
        ? EnumRs.win
        : homeScore === awayScore
        ? EnumRs.draw
        : EnumRs.lose;

    // Tập hợp các số
    const randomNumber = [0, 6.1, 8.1][Math.floor(Math.random() * 3)];

    const newEntry = {
      details: {
        date: new Date(b.startTimestamp * 1000).toLocaleDateString("en-GB"), // Chuyển timestamp sang ngày tháng
        status: b.status.type,
      },
      TeamOne: {
        Flag_Team: getTeamData(b.homeTeam.shortName).img,
        name: b.homeTeam.shortName,
        point: homeScore,
        rs: resultHome,
      },
      TeamTwo: {
        Flag_Team: getTeamData(b.awayTeam.shortName).img,
        name: b.awayTeam.shortName,
        point: awayScore,
        rs: resultAway,
      },
      rs: {
        point: randomNumber,
      },
    };

    return A[index] ? { ...A[index], ...newEntry } : newEntry;
  });

  return (
    <div className="w-full h-full gap-4 p-4 bg-background-component flex flex-col">
      <span className="text-size-title font-bold">MATCHES</span>

      {updatedA.map((item, index) => {
        return (
          <>
            <div className=" flex justify-between items-center rounded-sm bg-custom-gradient p-3">
              <div className="flex gap-2">
                <div className="flex flex-col items-center text-size-name font-normal text-text-subtitle">
                  <span>{item?.details?.date}</span>
                  <span>{item?.details?.status}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex max-h-fit justify-start items-center gap-2">
                    <img
                      className="w-5 h-5 object-contain rounded-full"
                      src={item?.TeamOne?.Flag_Team}
                    ></img>
                    <span
                      className={`text-size-name font-normal  ${
                        item?.TeamOne?.rs === EnumRs?.win ||
                        item?.TeamOne?.rs === EnumRs.draw
                          ? "text-[#FFFFF]"
                          : "text-text-subtitle "
                      }`}
                    >
                      {item?.TeamOne?.name}
                    </span>
                  </div>
                  <div className="flex max-h-fit justify-start items-center gap-2">
                    <img
                      className="w-5 h-5 object-contain rounded-full "
                      src={item?.TeamTwo?.Flag_Team}
                    ></img>
                    <span
                      className={`text-size-name font-normal  ${
                        item?.TeamTwo?.rs === EnumRs?.win ||
                        item?.TeamTwo?.rs === EnumRs.draw
                          ? "text-[#FFFFF]"
                          : "text-text-subtitle "
                      }`}
                    >
                      {item?.TeamTwo?.name}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex flex-col">
                  <div
                    style={{ borderRadius: "4px 4px 0px 0px" }}
                    className={`flex  pt-[5px] pb-[5px] pl-[7px] pr-[7px] justify-center items-end ${
                      parseInt(item?.TeamOne.rs) == EnumRs.win
                        ? "bg-gradient-to-b from-matches-custom-blue-1 via-matches-custom-blue-2 to-matches-custom-blue-3"
                        : item?.TeamOne.rs == EnumRs.draw
                        ? "bg-[#0038E0]"
                        : "bg-[#2187E5]"
                    }`}
                  >
                    <span className="m-auto"> {item.TeamOne.point}</span>
                  </div>

                  <div
                    style={{ borderRadius: "0px 0px 4px 4px" }}
                    className={`flex  pt-[5px] pb-[5px] pl-[7px] pr-[7px]  justify-center items-end ${
                      item?.TeamTwo.rs == EnumRs.win
                        ? "bg-gradient-to-b from-matches-custom-blue-1 via-matches-custom-blue-2 to-matches-custom-blue-3"
                        : item?.TeamTwo.rs == EnumRs.draw
                        ? "bg-[#0038E0]"
                        : "bg-[#2187E5]"
                    }`}
                  >
                    <span className="m-auto"> {item.TeamTwo.point}</span>
                  </div>
                </div>
                <div
                  className={`text-base w-[44px] font-normal pt-[5px] pb-[5px] pl-[7px] pr-[7px] ${
                    item.rs.point === 0
                      ? ""
                      : item.rs.point === 6.1
                      ? "bg-[#DA6900] rounded-sm"
                      : "bg-[#2EA76F] rounded-sm"
                  }`}
                >
                  {item.rs.point > 0 ? (
                    item.rs.point
                  ) : (
                    <ICON_NOTHING></ICON_NOTHING>
                  )}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Matches;
