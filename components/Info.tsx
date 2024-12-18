import React from "react";
import Title from "./Title";
import { info } from "@/mocks/info";
import InfoCard from "./InfoCard";

const Info = () => {
  return (
    <div className="w-full h-full">
      <div className="containerMain w-full h-full">
        <div className="px-[30px] md:px-0">
          <Title 
            title="How it works"
            subtitle="EFind out how to get started."
            className="mb-[48px]"
          />
          <div className="flex flex-col md:flex-row w-full justify-between gap-[30px]">
            {info.map((item, index) => (
              <div key={index} className="w-full h-full rounded-[20px] bg-[#3B3B3B] 
              md:hover-transform md:hover:-rotate-3 transition-all duration-300">
                <InfoCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
