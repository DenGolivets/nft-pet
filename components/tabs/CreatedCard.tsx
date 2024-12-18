import { Content, Creator } from "@/mocks/creators";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CreatedCardProps {
  creator: Creator;
}

const CreatedCard = ({ creator }: CreatedCardProps) => {
  const authorName = creator.name;
  const avatarUrl = creator.img;
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full">
      {creator.content.map((content, index) => (
        <div className="flex flex-col px-[30px] md:px-0" key={index}>
          <Image
            src={content.img}
            alt={content.name}
            width={330}
            height={295}
            className="rounded-tr-[20px] rounded-tl-[20px] w-full"
          />
          <div className="bg-[#2B2B2B] py-5 px-[30px] flex flex-col">
            <Link href={`/marketplace/${content.id}`}>
              <p className="text-[22px] font-semibold leading-[140%] mb-[5px] 
              hover:text-secondary transition-all duration-300">
                {content.name}
              </p>
            </Link>
            <div className="flex items-center gap-3 mb-[25px]">
              <Image 
                src={avatarUrl}
                alt="avatar"
                width={24}
                height={24}
              />
              <p className="font-spaceMono leading-[140%]">{authorName}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-[#858584] font-spaceMono text-xs leading-[110%]">Price</p>
                <p className="font-spaceMono leading-[140%]">{content.price} ETH</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#858584] font-spaceMono text-xs leading-[110%]">Highest Bid</p>
                <p className="font-spaceMono leading-[140%]">{content.hBid} wETH</p>
              </div>
            </div>
          </div>
      </div>
      ))}
    </div>
  );
};

export default CreatedCard;
