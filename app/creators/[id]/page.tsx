"use client";

import Tabs from "@/components/Tabs";
import { creators } from "@/mocks/creators";
import { social } from "@/mocks/social";
import { tabs } from "@/mocks/tabs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CountUp from "react-countup";
import { GoPlus } from "react-icons/go";
import { MdContentCopy } from "react-icons/md";

interface CreatorPageProps {
  params: {
    id: string;
  };
}

const CreatorPage = ({ params }: CreatorPageProps) => {
  const creator = creators.find((creator) => creator.id === Number(params.id));

  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const handleCopy = async () => {
    if (creator?.code) {
      try {
        await navigator.clipboard.writeText(creator.code); // Используем динамический код
        setCopySuccess("Скопировано!");
        setTimeout(() => setCopySuccess(null), 2000);
      } catch (error) {
        setCopySuccess("Ошибка при копировании!");
      }
    } else {
      setCopySuccess("Код отсутствует!");
    }
  };

  return (
    <>
      <div className="w-full h-full min-h-screen">
        {copySuccess && (
          <div
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-trannsparent
        text-white px-4 py-2 rounded-md shadow-md z-50 border-2 border-secondary"
          >
            {copySuccess}
          </div>
        )}
        <Image
          src="/artist/back.jpg"
          alt="background"
          width={1920}
          height={320}
          className="object-cover object-center w-full h-[320px] mb-[50px]"
        />
        <div className="border-b border-[#3B3B3B]">
          <div className="containerMain w-full h-full relative">
            <Image
              src={creator?.img || ""}
              alt="creator"
              width={120}
              height={120}
              className="rounded-full object-cover border-4 border-[#5a236e] absolute 
            transform left-1/3 -top-28 md:left-0"
            />
            <div className="px-[30px] md:px-0">
              {creator && (
                <>
                  <div className="flex flex-col md:flex-row md:justify-between mb-[30px]">
                    <p className="text-[28px] md:text-[51px] font-semibold leading-[110%] mb-[30px] md:mb-0">
                      {creator.name}
                    </p>
                    <div className="flex flex-col md:flex-row gap-5">
                      <button
                        className="rounded-[20px] bg-secondary py-[19px] px-[20px] font-semibold 
                text-white flex items-center justify-center border-2 border-secondary gap-3 
                hover:border-2 hover:border-secondary hover:bg-transparent transition-all duration-300"
                        onClick={handleCopy}
                      >
                        <MdContentCopy size={20} className="text-white" />
                        <p className=" text-white">{creator.code}</p>
                      </button>
                      <button
                        className="rounded-[20px] bg-transparent py-[19px] px-[30px] font-semibold 
                text-white flex items-center justify-center border-2 border-secondary gap-3 
                  hover:border-2 hover:border-secondary hover:bg-secondary transition-all 
                  duration-300 group"
                      >
                        <GoPlus
                          size={20}
                          className="text-secondary group-hover:text-white"
                        />
                        <p className="text-white">Follow</p>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between md:justify-normal md:gap-[55px]">
                    <div className="flex flex-col">
                      <p
                        className="font-spaceMono text-[22px] md:text-[28px] font-bold leading-[160%] 
                md:leading-[140%]"
                      >
                        <CountUp start={0} end={250} duration={4} />
                        k+
                      </p>
                      <p className="text-base md:text-[22px] leading-[140%] md:leading-[160%] text-white/80">
                        Volume
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p
                        className="font-spaceMono text-[22px] md:text-[28px] font-bold leading-[160%] 
                md:leading-[140%]"
                      >
                        <CountUp start={0} end={50} duration={4} />
                        k+
                      </p>
                      <p className="text-base md:text-[22px] leading-[140%] md:leading-[160%] text-white/80">
                        NFTs Sold
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p
                        className="font-spaceMono text-[22px] md:text-[28px] font-bold leading-[160%] 
                md:leading-[140%]"
                      >
                        <CountUp start={0} end={50} duration={4} />
                        k+
                      </p>
                      <p className="text-base md:text-[22px] leading-[140%] md:leading-[160%] text-white/80">
                        Followers
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col mt-[30px]">
                    <p className="text-[#858584] font-spaceMono font-bold text-[22px] leading-[160%] mb-2.5">
                      Bio
                    </p>
                    <p className="text-[22px] leading-[160%] mb-[30px]">
                      The internet's friendliest designer kid.
                    </p>
                    <p className="text-[#858584] font-spaceMono font-bold text-[22px] leading-[160%] mb-2.5">
                      Links
                    </p>
                    <div className="flex gap-2.5">
                      {social.map((item, index) => (
                        <Link href={item.link} key={index}>
                          <Image
                            src={item.icon}
                            alt="social"
                            width={32}
                            height={32}
                            className="hover:scale-110 transition-all duration-300"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {creator && (
        <div className="">
          <Tabs tabs={tabs} creator={creator} />
        </div>
      )}
    </>
  );
};

export default CreatorPage;
