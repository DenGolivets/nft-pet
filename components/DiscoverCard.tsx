import { DiscoverItem } from "@/mocks/discover";
import Image from "next/image";
import React from "react";

interface DiscoverCardProps {
  item: DiscoverItem;
}

const DiscoverCard = ({ item }: DiscoverCardProps) => {
  return (
    <div>
      <Image
        src={item.img}
        alt={item.title}
        width={370}
        height={370}
        className="w-full h-full rounded-tr-[20px] rounded-tl-[20px] object-cover"
      />
      <div className="flex flex-col w-full h-full py-5 px-[30px] bg-[#3B3B3B] rounded-br-[20px] rounded-bl-[20px]">
        <p className="text-[22px] font-semibold leading-[140%] mb-1.5">
          {item.title}
        </p>
        <div className="flex items-center gap-3 mb-[25px]">
          <Image
            src={item.avatarImg}
            alt={item.title}
            width={24}
            height={24}
            className="rounded-full"
          />
          <p className="font-spaceMono leading-[140%]">{item.authorName}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <p className="font-spaceMono text-xs leading-[110%] text-[#858584]">
              Price
            </p>
            <p className="font-spaceMono leading-[140%]">{item.price} ETH</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-spaceMono text-xs leading-[110%] text-[#858584]">
              Highest Bid
            </p>
            <p className="font-spaceMono leading-[140%]">{item.hBid} wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCard;
