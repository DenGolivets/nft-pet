"use client";

import NftCard from "@/components/NftCard";
import Title from "@/components/Title";
import { Content, creators } from "@/mocks/creators";
import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const MarketplacePage = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredContent, setFilteredContent] = useState<Content[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const ITEMS_PER_PAGE = 9;

  const contentToDisplay =
    filteredContent.length > 0
      ? filteredContent
      : creators.flatMap((creator) => creator.content);

  const filterContent = (term: string) => {
    if (term.length >= 3) {
      const filtered = creators.flatMap((creator) =>
        creator.content.filter((item) =>
          item.name.toLowerCase().includes(term.toLowerCase())
        )
      );
      setFilteredContent(filtered);
      setCurrentPage(1);
    } else {
      setFilteredContent([]);
      setCurrentPage(1);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    filterContent(value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredContent([]);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedContent = contentToDisplay.slice(startIndex, endIndex);

  const totalPages = Math.ceil(contentToDisplay.length / ITEMS_PER_PAGE);

  return (
    <div className="w-full h-full min-h-screen px-[30px] md:px-0">
      <div className="w-full h-full border-b border-[#3B3B3B] mb-[60px]">
        <div className="containerMain">
          <Title
            title="Browse Marketplace"
            subtitle="Browse through more than 50k NFTs on the NFT Marketplace."
            className="mb-[30px]"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Search your favourite NFTs"
              value={searchTerm}
              onChange={handleSearch}
              className="w-full h-[60px] bg-transparent rounded-[20px] px-5 placeholder:text-[#858584]
            text-white text-base leading-[160%] outline-none border border-[#3B3B3B]"
            />
            {searchTerm && (
              <FiX
                size={16}
                onClick={clearSearch}
                className="absolute top-1/2 transform -translate-y-1/2 text-gray-500 
                hover:text-red-500 cursor-pointer transition"
                style={{
                  left: `${18 + searchTerm.length * 12}px`,
                }}
              />
            )}
            <FiSearch
              size={24}
              className="absolute top-1/2 right-5 transform -translate-y-1/2
              cursor-pointer"
            />
          </div>
        </div>
      </div>
      {/* Карточки с пагинацией */}
      <div className="w-full h-full md:bg-[#3B3B3B]">
        <div className="containerMain">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] w-full h-full">
            {paginatedContent.map((content, index) => (
              <div key={index} className="rounded-[20px] mb-[30px]">
                <NftCard content={content} avatarUrl={content.img} />
              </div>
            ))}
          </div>
          {/* Пагинация */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`md:w-[40px] md:h-[40px] flex items-center justify-center rounded-full 
                    text-white font-semibold w-[20px] h-[20px] ${
                    currentPage === pageNumber
                      ? "bg-purple-600 text-white scale-110"
                      : "bg-[#2B2B2B] hover:bg-[#444] transition"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketplacePage;
