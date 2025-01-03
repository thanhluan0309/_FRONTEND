import React, { useEffect, useState } from "react";
import Navbar from "../navbar/navbar";

import { playerInfo, matchList } from "../../data/MockData";
const Base = ({ children }) => {
  const [statePlayerInfo, setStatePlayerInfo] = useState(playerInfo);
  const [stateMatches, setStateMatches] = useState(matchList);

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      statePlayerInfo: statePlayerInfo,
      stateMatches: stateMatches,
    })
  );

  return (
    <>
      <div className=" bg-background-main text-text-main w-full h-max flex">
        <div className="w-full items-center justify-center m-auto">
          <div className=" w-full h-[100vh]  flex flex-col justify-start">
            <Navbar></Navbar>
            <div className=" h-auto overflow-auto"> {childrenWithProps}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Base;
