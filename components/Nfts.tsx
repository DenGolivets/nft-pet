import React from "react";
import Title from "./Title";
import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";
import { discover } from "@/mocks/discover";
import DiscoverCard from "./DiscoverCard";

const Nfts = () => {
  return (
    <div className="w-full h-full">
      <div className="containerMain w-full h-full">
        <div className="px-[30px] md:px-0">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-[60px]">
            <Title
              title="Discover More NFTs"
              subtitle="Explore new trending NFTs."
            />
            <Link
              className="hidden md:flex rounded-[20px] bg-transparent py-[10px] px-[50px] font-workSans 
              font-semibold items-center justify-center gap-3 hover:border-2 hover:border-secondary
              hover:bg-secondary transition-all duration-300 border-2 border-secondary 
              mt-[30px] w-full md:w-auto group"
              href="/marketplace"
            >
              <IoEyeOutline
                size={20}
                className="text-secondary group-hover:text-white"
              />
              <p className="text-white">See All</p>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between w-full gap-5 md:gap-[50px]">
            {discover.map((item, index) => (
              <div
                key={index}
                className="w-full h-[469px] rounded-[20px] md:hover:transform md:hover:rotate-3 
                transition-all duration-300 select-none"
              >
                <DiscoverCard item={item} />
              </div>
            ))}
          </div>
          <Link
              className="flex md:hidden rounded-[20px] bg-transparent py-[10px] px-[50px] font-workSans 
              font-semibold items-center justify-center gap-3 hover:border-2 hover:border-secondary
              hover:bg-secondary transition-all duration-300 border-2 border-secondary 
              mt-[20px] w-full md:w-auto group"
              href="/marketplace"
            >
              <IoEyeOutline
                size={20}
                className="text-secondary group-hover:text-white"
              />
              <p className="text-white">See All</p>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Nfts;
