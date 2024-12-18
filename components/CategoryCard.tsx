import { Category } from "@/mocks/categories";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link href={`/categories/${category.id}`}>
      <div className="relative w-full h-[142px] md:h-[240px] rounded-tr-[20px] rounded-tl-[20px] overflow-hidden">
        <div
          style={{
            backgroundImage: `url(${category.bgImg})`,
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0 w-full h-[full] bg-cover bg-center filter blur-sm"
        />
        <div className="flex items-center justify-center h-full">
          <Image 
            src={category.icon}
            alt={category.title}
            width={100}
            height={100}
            className="relative z-10 flex items-center justify-center"
          />
        </div>
      </div>
        <div className="bg-[#3B3B3B] py-5 px-[30px] rounded-br-[20px] rounded-bl-[20px] md:h-auto
        h-[87px]">
          <p className="text-base md:text-[22px] font-semibold leading-[140%]">
            {category.title}
          </p>
        </div>
      
    </Link>
  );
};

export default CategoryCard;
