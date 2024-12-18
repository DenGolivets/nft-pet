import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="w-full h-[640px] relative overflow-hidden mb-[80px]">
      <div
        style={{
          backgroundImage: `url('/banner.jpg')`,
          backgroundRepeat: "no-repeat",
        }}
        className="absolute inset-0 w-full h-full bg-cover bg-bottom"
      />
      <div className="px-[30px] md:px-[195px] flex flex-col justify-center md:flex-row w-full md:justify-between 
      mt-[120px] md:mt-[360px] relative z-10">
        <div className="flex flex-col">
          <div className="py-2.5 px-5 rounded-[20px] bg-[#3B3B3B] flex gap-3 mb-[30px] w-fit">
            <Image
              src="/avatars/7.svg"
              alt="avatar"
              width={24}
              height={24}
              className="rounded-full"
            />
            <p className="leading-[140%]">Shroomie</p>
          </div>
          <p className="text-[51px] font-semibold leading-[110%] mb-[30px]">
            Magic Mashrooms
          </p>
          <Link
            className="hidden w-fit md:flex rounded-[20px] bg-white py-[20px] px-[50px] font-workSans 
            font-semibold items-center justify-center gap-3 hover:bg-secondary transition-all 
            duration-300 group"
            href="/rankings"
          >
            <IoEyeOutline
              size={20}
              className="text-secondary group-hover:text-white"
            />
            <p className="text-[#2B2B2B]">See NFT</p>
          </Link>
        </div>
        <div>
          <div className="bg-[#3B3B3B]/70 rounded-[20px] p-[30px] flex flex-col">
            <p className="font-spaceMono text-xs leading-[110%] mb-2.5">
              Auction ends in:
            </p>
            <div className="flex gap-2.5 mb-1">
              <div className="flex flex-col gap-1">
                <p className="font-spaceMono font-bold text-[38px] leading-[120%]">59</p>
                <p className="font-spaceMono text-xs leading-[110%]">Hours</p>
              </div>
              <p className="font-spaceMono font-bold text-[38px] leading-[120%]">:</p>
              <div className="flex flex-col gap-1">
                <p className="font-spaceMono font-bold text-[38px] leading-[120%]">59</p>
                <p className="font-spaceMono text-xs leading-[110%]">Minutes</p>
              </div>
              <p className="font-spaceMono font-bold text-[38px] leading-[120%]">:</p>
              <div className="flex flex-col gap-1">
                <p className="font-spaceMono font-bold text-[38px] leading-[120%]">59</p>
                <p className="font-spaceMono text-xs leading-[110%]">Seconds</p>
              </div>
            </div>
          </div>
        </div>
        <Link
            className="md:hidden w-full flex rounded-[20px] bg-white py-[20px] px-[50px] font-workSans 
            font-semibold items-center justify-center gap-3 hover:bg-secondary transition-all 
            duration-300 group mt-[30px]"
            href="/rankings"
          >
            <IoEyeOutline
              size={20}
              className="text-secondary group-hover:text-white"
            />
            <p className="text-[#2B2B2B]">See NFT</p>
          </Link>
      </div>
    </div>
  );
};

export default Banner;
