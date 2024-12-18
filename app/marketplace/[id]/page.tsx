import CreatedCard from "@/components/tabs/CreatedCard";
import Title from "@/components/Title";
import { Content, Creator, creators } from "@/mocks/creators";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";

interface NftIdPageProps {
  params: {
    id: string;
  };
}

const NftIdPage = ({ params }: NftIdPageProps) => {
  let nft: Content | undefined;
  let creatorData: Creator | undefined;

  creators.forEach((creator) => {
    const foundCreator = creator.content.find(
      (content) => content.id === Number(params.id)
    );
    if (foundCreator) {
      creatorData = creator;
    }
    const foundContent = creator.content.find(
      (content) => content.id === Number(params.id)
    );
    if (foundContent) {
      nft = foundContent;
    }
  });

  if (!nft) {
    return <div>Контент не найден!</div>;
  }

  return (
    <div className="w-full h-full min-h-screen">
      <div className="mb-10">
        <Image
          src="/nft-id.jpg"
          width={1200}
          height={1080}
          quality={100}
          alt={nft.name}
          className="w-full h-[560px] object-cover"
        />
      </div>
      <div className="containerMain">
        <div className="flex flex-col md:flex-row gap-3 md:gap-[150px] w-full px-[30px] md:px-0">
          <div className="flex flex-col">
            <p className="text-[51px] font-semibold leading-[110%] mb-2.5">
              {nft.name}
            </p>
            <p className="text-[22px] text-[#858584] leading-[160%] mb-[30px]">
              Minted on Dec 12, 2024
            </p>
            <p className="font-spaceMono text-[22px] text-[#858584] leading-[160%] font-bold mb-2.5">
              Created By
            </p>
            <div className="flex items-center gap-3 mb-[30px]">
              <Image
                src={creatorData?.img || ""}
                alt="creator"
                width={24}
                height={24}
              />
              <p className="text-[22px] font-semibold leading-[140%]">
                {creatorData?.name}
              </p>
            </div>
            <p className="font-spaceMono text-[22px] text-[#858584] leading-[160%] font-bold mb-2.5">
              Description
            </p>
            <p className="text-[22px] leading-[160%] w-full max-w-[705px] mb-[30px]">
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain,There are all sorts of beings in the NFT
              Universe. The most advanced and friendly of the bunch are
              Orbitians. They live in a metal space machines, high up in the sky
              and only have one foot on Earth. These Orbitians are a peaceful
              race, but they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they{"'"}ve taken to make human beings their target.
            </p>
            <p className="font-spaceMono text-[22px] text-[#858584] leading-[160%] font-bold mb-2.5">
              Details
            </p>
            <div className="flex items-center gap-3 mb-2.5">
              <Image
                src="/social/Globe.svg"
                alt="Globe"
                width={32}
                height={32}
              />
              <Link href="#">
                <p className="text-[22px] leading-[160%]">View on Ukrainian</p>
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-[30px]">
              <Image
                src="/social/Globe.svg"
                alt="Globe"
                width={32}
                height={32}
              />
              <Link href="#">
                <p className="text-[22px] leading-[160%]">View Original</p>
              </Link>
            </div>
            <p className="font-spaceMono text-[22px] text-[#858584] leading-[160%] font-bold mb-10">
              Tags
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-5">
              <div
                className="w-fit rounded-[20px] bg-[#3B3B3B] flex items-center justify-center py-3
              px-[30px] cursor-pointer hover:bg-secondary transition-all duration-300"
              >
                <p className="uppercase font-semibold leading-[140%]">
                  Animation
                </p>
              </div>
              <div
                className="w-fit rounded-[20px] bg-[#3B3B3B] flex items-center justify-center py-3
              px-[30px] cursor-pointer hover:bg-secondary transition-all duration-300"
              >
                <p className="uppercase font-semibold leading-[140%]">
                  illustration
                </p>
              </div>
              <div
                className="w-fit rounded-[20px] bg-[#3B3B3B] flex items-center justify-center py-3
              px-[30px] cursor-pointer hover:bg-secondary transition-all duration-300"
              >
                <p className="uppercase font-semibold leading-[140%]">moon</p>
              </div>
              <div
                className="w-fit rounded-[20px] bg-[#3B3B3B] flex items-center justify-center py-3
              px-[30px] cursor-pointer hover:bg-secondary transition-all duration-300"
              >
                <p className="uppercase font-semibold leading-[140%]">moon</p>
              </div>
            </div>
          </div>
          <div className="flex justify-start md:justify-end w-full">
            <div className="flex flex-col w-full md:w-auto">
              <div className="bg-[#3B3B3B] p-[30px] rounded-[20px]">
                <p className="font-spaceMono text-xs leading-[110%] mb-2.5">
                  Auction ends in:
                </p>
                <div className="flex gap-2.5 mb-1">
                  <div className="flex flex-col gap-1">
                    <p className="font-spaceMono font-bold text-[38px] leading-[120%]">
                      59
                    </p>
                    <p className="font-spaceMono text-xs leading-[110%]">
                      Hours
                    </p>
                  </div>
                  <p className="font-spaceMono font-bold text-[38px] leading-[120%]">
                    :
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="font-spaceMono font-bold text-[38px] leading-[120%]">
                      59
                    </p>
                    <p className="font-spaceMono text-xs leading-[110%]">
                      Minutes
                    </p>
                  </div>
                  <p className="font-spaceMono font-bold text-[38px] leading-[120%]">
                    :
                  </p>
                  <div className="flex flex-col gap-1 mb-[30px]">
                    <p className="font-spaceMono font-bold text-[38px] leading-[120%]">
                      59
                    </p>
                    <p className="font-spaceMono text-xs leading-[110%]">
                      Seconds
                    </p>
                  </div>
                </div>
                <button
                  className="bg-secondary rounded-[20px] py-[19px] px-[80px] w-full border-2
              border-secondary hover:bg-primary hover:border-secondary transition-all 
                duration-300"
                >
                  <p>Place Bid</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerMain">
        <div className="flex items-end justify-between h-full w-full mb-[74px] px-[30px] md:px-0">
          <Title title="More from this artist" />
          <div className="flex items-center h-full">
            <Link
              className="hidden md:inline-flex rounded-[20px] bg-transparent py-[19px] px-[50px] font-workSans 
              font-semibold items-center justify-center gap-3 hover:border-2 hover:border-secondary
              hover:bg-secondary transition-all duration-300 border-2 border-secondary 
              mt-[30px] w-full md:w-auto group"
              href={`/creators/${creatorData?.id}`}
            >
              <FiArrowRight
                size={20}
                className="text-secondary group-hover:text-white"
              />
              <p className="text-white">Go To Artist Page</p>
            </Link>
          </div>
        </div>
        {creatorData && <CreatedCard creator={creatorData} />}
      </div>
    </div>
  );
};

export default NftIdPage;
