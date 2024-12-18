"use client";

import { Tab } from "@/types/types";
import React, { useState } from "react";
import CreatedContent from "./tabs/CreatedContent";
import OwnedContent from "./tabs/OwnedContent";
import CollectionContent from "./tabs/CollectionContent";
import { Creator } from "@/mocks/creators";

interface TabsProps {
  tabs: Tab[];
  creator: Creator;
}

const Tabs = ({ tabs, creator }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const renderContent = (tabId: string) => {
    switch (tabId) {
      case "created":
        return <CreatedContent creator={creator} />;
      case "owned":
        return <OwnedContent />;
      case "collection":
        return <CollectionContent />;
      default:
        return null;
    }
  };

  return (
    <div className="mt-[15px] flex flex-col w-full">
      {/* Навигация табов */}
      <div className="px-[30px] md:px-[320px]">
        <div className="flex gap-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-4 pb-4 text-lg font-semibold transition-all duration-300 ${
                  isActive ? "text-white" : "text-[#858584]"
                }`}
              >
                <span>{tab.title}</span>

                {/* Кружок с количеством */}
                <span
                  className={`w-fit h-fit py-[5px] px-2.5 items-center justify-center 
                    rounded-[20px] transition-all duration-300 hidden md:flex ${
                    isActive ? "bg-[#858584]" : "bg-[#3B3B3B]"
                  }`}
                >
                  {tab.count}
                </span>

                {/* Нижний бордер для активного таба */}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#858584]" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Контент активного таба */}
      <div className="text-white bg-[#3B3B3B] border-b-2 border-primary">
        {renderContent(activeTab)}
      </div>
    </div>
  );
};

export default Tabs;
