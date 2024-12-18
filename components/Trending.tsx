import React from "react";
import Title from "./Title";
import { trending } from "@/mocks/trending";
import TrendingCard from "./TrendingCard";

const Trending = () => {
  return (
    <div className="w-full h-full">
      <div className="containerMain w-full h-full">
        <div className="px-[30px] md:px-0">
          <Title
            title="Trending Collection"
            subtitle="Checkout Our Weekly Updated Trending Collection."
            className="mb-[80px]"
          />
          <div className="flex md:justify-between gap-[50px]">
            {trending.map((item, index) => (
              <div 
                className={`w-full md:h-[525px] md:w-[330px] ${index > 0 ? 'hidden sm:block' : ''}`} 
                key={index}
              >
                <TrendingCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
