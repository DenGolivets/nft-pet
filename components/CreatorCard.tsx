import { Creator } from "@/mocks/creators";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CreatorCardProps {
  creator: Creator;
}

const CreatorCard = ({ creator }: CreatorCardProps) => {
  return (
    <div className="">
      <div className="flex w-full h-full justify-center mb-5">
        <Image
          src={creator.img}
          alt={creator.name}
          width={120}
          height={120}
          className="object-cover rounded-full hover:scale-105 transition-all duration-300"
        />
      </div>
      <div className="text-center w-full h-full">
        <Link href={`/creators/${creator.id}`} className="font-semibold text-[22px] leading-[140%]
        hover:text-secondary transition-all duration-300">
          {creator.name}
        </Link>
        <p className="font-spaceMono leading-[140%]">
          <span className="font-workSans text-[#858584] leading-[140%]">Total Sales:</span>{" "}
          {creator.totalSales} ETH
        </p>
      </div>
    </div>
  );
};

export default CreatorCard;
