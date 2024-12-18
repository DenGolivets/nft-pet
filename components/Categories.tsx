import React from "react";
import Title from "./Title";
import { categories } from "@/mocks/categories";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <div className="w-full h-full">
      <div className="containerMain w-full h-full">
        <div className="px-[30px] md:px-0">
          <Title title="Browse Categories" className="mb-[60px]" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px]">
            {categories.map((category, index) => (
              <div
                key={index}
                className="w-full h-[231px] md:h-[316px] rounded-[20px] hover:scale-105 transition-all duration-300"
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
