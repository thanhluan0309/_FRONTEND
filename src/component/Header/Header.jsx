import { ICON_START } from "../../assets/Icon/Icon";
import IMG from "../../assets/img/image 925.png";

import { IMG_COMO, IMG_AGENTINA } from "../../assets/img/Img";
import { MapViewInfor } from "../../data/data";
import { useState } from "react";

import { ConvertTimeTamp } from "../../Func/func";
const Header = ({ statePlayerInfo }) => {
  const [statePlayer, setStatePlayer] = useState(
    statePlayerInfo?.data?.player || {}
  );
  const MapObject = MapViewInfor();

  const updatedData = MapObject.map((item) => {
    const key = item.id;
    switch (key) {
      case "nationality":
        return {
          ...item,
          content: statePlayer?.nationality?.name || item.content,
          img: IMG_AGENTINA,
        };
      case "dateOfBirthTimestamp":
        return {
          ...item,
          content: ConvertTimeTamp(statePlayer?.dateOfBirthTimestamp),
          subcontent: `${
            new Date().getFullYear() -
            new Date(statePlayer?.dateOfBirthTimestamp * 1000).getFullYear()
          } years old`,
        };
      case "height":
        return {
          ...item,
          content: `${statePlayer?.height} cm`,
        };
      case "preferredFoot":
        return {
          ...item,
          content: statePlayer?.preferredFoot || "Unknown",
        };
      case "position":
        return {
          ...item,
          content: statePlayer?.position || item.content,
        };
      default:
        return item;
    }
  });

  return (
    <>
      <div className=" bg-background-component grid grid-cols-1 md:grid-cols-2">
        <div className="relative col-span-1 pt-12 pb-12 pl-4 pr-4">
          <div className="w-full  h-full justify-center flex flex-col">
            <div className="absolute top-0 right-5 translate-y-[50%]">
              <ICON_START></ICON_START>
            </div>
            <div className="flex gap-4 items-center">
              <img
                class="w-24 h-24 rounded-full bg-white"
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfx_oy6gG3DExcLzyck6JVDIWWmvedguk5Uw&s"
                }
                alt="Rounded avatar"
              />
              <div className="flex flex-col  gap-1">
                <span className="font-medium text-[28px] sm:text-[32px]">
                  {statePlayer?.name}
                </span>
                <div className="flex gap-2">
                  <img
                    class="w-10 h-10 rounded-full"
                    src={IMG_COMO}
                    alt="Rounded avatar"
                  />
                  <div className="flex flex-col">
                    <span className="text-size-name font-semibold">
                      {statePlayer?.team?.name}
                    </span>
                    <span className="text-size-subname text-text-subtitle font-normal">
                      Contract{" "}
                      {ConvertTimeTamp(statePlayer?.contractUntilTimestamp)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="w-full h-full  grid grid-cols-2">
            {updatedData.map((item, index) => {
              return (
                <div className="col-span-1 p-4 border border-gray-900 flex flex-col justify-center gap-1">
                  <span className="text-size-subname text-text-subtitle font-normal">
                    {item.title}
                  </span>
                  <div className="flex gap-2">
                    {item.img ? (
                      <img
                        className="w-6 h-6 rounded-full"
                        src={item.img}
                      ></img>
                    ) : (
                      <div>{<item.ICON></item.ICON>}</div>
                    )}
                    <div className="flex flex-col">
                      <span>{item.content}</span>
                      {item?.subcontent ? (
                        <span className="text-size-subname text-text-subtitle font-normal">
                          {item?.subcontent}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
