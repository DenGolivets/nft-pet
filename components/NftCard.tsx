import { Content } from "@/mocks/creators";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface NftCardProps {
  content: Content;
  avatarUrl: string;
}

const NftCard = ({ content, avatarUrl }: NftCardProps) => {
  return (
    <>
      <Image
        src={content.img}
        alt={content.name}
        width={300}
        height={295}
        className="w-full rounded-tr-[20px] rounded-tl-[20px]"
      />
      <div className="bg-[#3B3B3B] md:bg-[#2B2B2B] py-5 px-[30px] rounded-bl-[20px] rounded-br-[20px] flex flex-col">
        <Link href={`/marketplace/${content.id}`} className=" mb-[5px]">
          <p className="font-semibold text-[22px] hover:text-secondary transition-all duration-300
          leading-[140%]">
            {content.name}
          </p>
        </Link>
        <div className="flex items-center gap-3 mb-[25px]">
          <Image src={avatarUrl} alt="avatar" width={24} height={24} />
          <p className="font-spaceMono leading-[140%]">{content.authorName}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-[#858584] font-spaceMono text-xs leading-[110%]">
              Price
            </p>
            <p className="font-spaceMono leading-[140%]">{content.price} ETH</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#858584] font-spaceMono text-xs leading-[110%]">
              Highest Bid
            </p>
            <p className="font-spaceMono leading-[140%]">{content.hBid} wETH</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NftCard;
