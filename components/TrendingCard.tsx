import { TrendingItem } from '@/mocks/trending';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface TrendingCardProps {
  item: TrendingItem;
}

const TrendingCard = ({ item }: TrendingCardProps) => {
  return (
    <>
      <div className='mb-[15px]'>
        <Image 
          src={item.img}
          alt={item.title}
          width={330}
          height={330}
          className='object-cover rounded-[20px] shadow-md shadow-red-500/50 
          md:hover:scale-90 transition-all duration-500 w-full md:w-[330px] h-[330px]'
        />
      </div>
      <div className='flex gap-[35px] md:gap-[15px] mb-[15px]'>
        {item.subImg.map((img, index) => (
          <Image
            src={img}
            alt={item.title}
            width={100}
            height={100}
            className='object-cover rounded-[20px] shadow-md hover:scale-105 transition-all 
            duration-500'
            key={index}
          />
        ))}
        <div className='size-[100px] bg-secondary rounded-[20px] items-center justify-center flex'>
          <p className='font-spaceMono font-bold text-[22px] leading-[160%] cursor-pointer'>
            1025+
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-2.5'>
        <p className='text-[22px] font-semibold leading-[140%]'>{item.title}</p>
        <div className='flex gap-3 items-center'>
          <Image 
            src={item.avatarImg}
            alt={item.authorName}
            width={24}
            height={24}
            className='object-cover rounded-full'
          />
          <p className='leading-[140%] text-white/80'>{item.authorName}</p>
        </div>
      </div>
    </>
  )
}

export default TrendingCard
