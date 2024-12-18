import { Info } from '@/mocks/info'
import Image from 'next/image';
import React from 'react'

interface InfoCardProps {
  item: Info;
}

const InfoCard = ({ item }: InfoCardProps) => {
  return (
    <div className='pt-2.5 pb-[30px] px-10 flex flex-col items-center justify-center'>
      <Image 
        src={item.img}
        alt={item.title}
        width={250}
        height={250}
        className='mb-5'
      />
      <p className='mb-2.5 text-[22px] font-semibold leading-[140%]'>{item.title}</p>
      <p className='text-center leading-[140%] text-white/80'>{item.description}</p>
    </div>
  )
}

export default InfoCard
