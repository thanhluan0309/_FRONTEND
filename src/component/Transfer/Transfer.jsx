import { LineChart } from "../LineChart/LineChart";
import { MapViewTranfer } from "../../data/data";
const Transfer = () => {
  const Mapdata = MapViewTranfer();
  return (
    <div className="bg-background-component grid grid-cols-1 lg:grid-cols-2">
      <div className="col-span-1">
        <div className="p-4 w-full h-full flex gap-4 flex-col">
          <span className="text-size-title font-bold">TRANSFER VALUE</span>
          <div className="w-full h-56 lg:w-[50vh]">
            <LineChart></LineChart>
          </div>
          <div className="flex gap-4 justify-between items-center ">
            <div className="flex justify-between items-center w-full">
              <div className="flex justify-between gap-4 items-center w-fit">
                <span className="w-12 h-1 gap-2 flex">
                  <div className="w-3  bg-[#F6B500]"></div>
                  <div className="w-3 bg-[#F6B500]"></div>
                  <div className="w-3 bg-[#F6B500]"></div>
                  <div className="w-3 bg-[#F6B500]"></div>
                </span>
                <span className="text-xs font-normal">
                  Current player value
                </span>
              </div>
            </div>
            <span className="text-xs w-32 text-end font-semibold text-text-subtitle">
              11.6M $
            </span>
          </div>
          <div className="flex gap-4 justify-between items-center ">
            <div className="flex gap-4 justify-between items-center w-fit">
              <span className="text-[#F6B500]">
                <div className="w-12 h-1 bg-[#2187E5]"></div>
              </span>
              <span className="text-xs font-normal">Transfer fee</span>
            </div>
            <span className="text-xs w-32 text-end font-semibold text-text-subtitle">
              (Highest) 66M
            </span>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="w-full h-full flex flex-col p-4 border-l border-[#272A31]">
          {Mapdata.map((item, index) => {
            return (
              <>
                <div className="w-full h-full flex justify-between  items-center border-b border-[#272A31]">
                  <div className="flex gap-2">
                    <img className="object-contain" src={item.Logo}></img>
                    <div className="flex flex-col gap-1">
                      <span className="text-text-main text-size-name">
                        {item.content}
                      </span>
                      <span className="text-text-subtitle text-size-subname">
                        {item.subcontent}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end">
                    <span className="text-[#48FF5A] text-size-name">-</span>
                    <span className="text-[#48FF5A] text-size-subname">
                      End of loan
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Transfer;
