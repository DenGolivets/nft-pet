import { Creator, creators } from "@/mocks/creators";
import React from "react";
import CreatedCard from "./CreatedCard";

interface CreatedContentProps {
  creator: Creator;
}

const CreatedContent = ({ creator }: CreatedContentProps) => {
  return (
    <div className="w-full h-full bg-[#3B3B3B] py-[80px] px-[30px] md:px-[320px]">
      <CreatedCard creator={creator} />
    </div>
  );
};

export default CreatedContent;
