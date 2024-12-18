'use client'

import Image from "next/image";
import React from "react";
import { PiRocketLaunch } from "react-icons/pi";
import CountUp from "react-countup";

const Header = () => {
  return (
    <div className="w-full h-full">
      <div className="containerMain w-full h-full">
        <div className="flex flex-col px-[30px] md:px-0 md:flex-row md:gap-40 
        md:justify-between mx-auto">
          <div className="">
            <h1 className="text-[28px] md:text-[67px] font-workSans font-semibold leading-[140%]
            md:leading-[110%]">
              Discover <br className="hidden md:block" /> Digital Art & 
              <br className="hidden md:block" /> Collect NFTs
            </h1>
            <p className="text-base md:text-[22px] leading-[140%] md:leading-[160%] mt-5">
              NFT marketplace UI created with Anima for <br /> Figma. Collect,
              buy and sell art from more <br />
              than 20k NFT artists.
            </p>
            <button
              className="rounded-[20px] bg-secondary py-[10px] px-[24px] font-workSans 
              font-semibold flex items-center justify-center gap-3 hover:border-2 hover:border-secondary
              hover:bg-transparent transition-all duration-300 border-2 border-secondary
              mt-[30px] w-full md:w-auto"
            >
              <PiRocketLaunch size={20} className="text-white" />
              Get Started
            </button>
            <div className="flex items-center justify-between mt-[30px] mb-5 md:mb-0">
              <div className="flex flex-col">
                <p className="text-[22px] md:text-[28px] font-bold leading-[160%] md:leading-[140%]">
                  <CountUp start={0} end={240} duration={4} separator="," />k+
                </p>
                <p className="text-base md:text-[24px] leading-[140%] md:leading-[160%] text-white/80">
                  Total Sale
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[22px] md:text-[28px] font-bold leading-[160%] md:leading-[140%]">
                  <CountUp start={0} end={100} duration={4} separator="," />k+
                </p>
                <p className="text-base md:text-[24px] leading-[140%] md:leading-[160%] text-white/80">
                  Auctions
                </p>
              </div>
              <div className="flex flex-col">
                <p className="text-[22px] md:text-[28px] font-bold leading-[160%] md:leading-[140%]">
                  <CountUp start={0} end={240} duration={4} separator="," />k+
                </p>
                <p className="text-base md:text-[24px] leading-[140%] md:leading-[160%] text-white/80">
                  Artists
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[510px] flex flex-col flex-1 select-none">
            <div className="rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
              <Image
                src="/gallery/header.jpg"
                alt="gallery"
                width={500}
                height={400}
                className="object-cover w-full"
              />
            </div>
            <div className="bg-[#3B3B3B] py-[22px] px-5 rounded-br-[20px] rounded-bl-[20px]">
              <p className="font-workSans leading-[140%] text-[22px] font-semibold mb-2.5">
                Space Walking
              </p>
              <div className="flex items-center gap-3">
                <Image src='/avatars/8.svg' alt="avatar" width={24} height={24} />
                <p className="leading-[140%]">Animakid</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
