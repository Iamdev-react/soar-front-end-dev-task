import React from "react";

type SettingsTabsProps = {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
};

const SettingsTabs: React.FC<SettingsTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => {
  return (
    <div className="flex space-x-10 border-b border-gray-200 pb-0 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`text-xs md:text-sm font-medium ${
            activeTab === tab
              ? "text-black border-b-2 border-[#232323] pb-1"
              : "text-[#718EBF] border-b-2 border-transparent pb-1 cursor-pointer"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SettingsTabs;
