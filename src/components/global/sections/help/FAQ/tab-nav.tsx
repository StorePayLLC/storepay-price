import React from 'react';
import { ChevronRight } from 'lucide-react';

import { tabItems } from './data';

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (key: string) => void;
  searchQuery: string;
  filteredData: Record<string, Array<{ key: string; label: string; children: string }>>;
}

export function TabNav({ activeTab, setActiveTab, searchQuery, filteredData }: TabNavigationProps) {
  return (
    <div className="md:w-1/4">
      <nav className="flex flex-row gap-2 overflow-x-auto md:flex-col md:overflow-x-visible">
        {tabItems.map((tab) => {
          const hasMatches = searchQuery && filteredData[tab.label.toLowerCase().replace(/[^a-zA-Z]/g, '')]?.length > 0;

          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center justify-end gap-4 whitespace-nowrap rounded-xl p-4 text-right transition-colors ${activeTab === tab.key ? 'bg-[#EAECEE] font-medium text-black-2' : 'hover:bg-gray-100 text-[#393E46]'} ${hasMatches ? 'ring-blue-500 ring-2' : ''}`}
            >
              <span className="text-lg font-light">{tab.label}</span>
              <ChevronRight className={`h-5 w-5 transition-transform ${activeTab === tab.key ? 'rotate-90' : ''}`} />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
