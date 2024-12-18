import React from 'react'

interface TitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const Title = ({ title, subtitle, className }: TitleProps) => {
  return (
    <div className={`flex flex-col gap-2.5 ${className}`}>
      <p className='text-[28px] md:text-[38px] font-semibold leading-[140%] md:leading-[120%]'>
        {title}
      </p>
      <p className='text-base md:text-[22px] leading-[140%] md:leading-[160%] text-white/80'>
        {subtitle}
      </p>
    </div>
  )
}

export default Title
