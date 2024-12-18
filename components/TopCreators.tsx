import React from "react";
import Title from "./Title";
import { PiRocketLaunch } from "react-icons/pi";
import Link from "next/link";
import { creators } from "@/mocks/creators";
import CreatorCard from "./CreatorCard";

const TopCreators = () => {
  return (
    <div className="w-full h-full">
      <div className="containerMain w-full h-full">
        <div className="px-[30px] md:px-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[60px]">
            <Title
              title="Top Creators"
              subtitle="Checkout Top Rated Creators on the NFT Marketplace."
            />
            <Link
              className="hidden md:flex rounded-[20px] bg-transparent py-[10px] px-[50px] font-workSans 
              font-semibold items-center justify-center gap-3 hover:border-2 hover:border-secondary
              hover:bg-secondary transition-all duration-300 border-2 border-secondary 
              mt-[30px] w-full md:w-auto group"
              href="/rankings"
            >
              <PiRocketLaunch
                size={20}
                className="text-secondary group-hover:text-white"
              />
              <p className="text-white">View Rankings</p>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[30px]">
            {creators.map((creator, index) => (
              <div
                key={index}
                className="w-full h-[238px] p-5 relative bg-[#3B3B3B] rounded-[20px]"
              >
                <div
                  className="absolute top-[20px] left-[20px] bg-[#2B2B2B] size-[30px]
              rounded-full items-center justify-center flex"
                >
                  <p className="text-[#858584] font-spaceMono leading-[140%]">
                    {index + 1}
                  </p>
                </div>
                <CreatorCard creator={creator} key={index} />
              </div>
            ))}
          </div>
          {/* Кнопка для мобильных экранов */}
          <Link
            className="md:hidden flex rounded-[20px] bg-transparent py-[20px] px-[50px] font-workSans 
            font-semibold items-center justify-center gap-3 hover:border-2 hover:border-secondary
            hover:bg-secondary transition-all duration-300 border-2 border-secondary 
            mt-[30px] w-full group"
            href="/rankings"
          >
            <PiRocketLaunch
              size={20}
              className="text-secondary group-hover:text-white"
            />
            <p className="text-white">View Rankings</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
