'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { t } from '@lingui/core/macro';

import { faqData, tabItems } from './data';
import { FAQItem } from './faq-item';
import { Search } from './search';
import { TabNav } from './tab-nav';

function App() {
  const [activeTab, setActiveTab] = useState('1');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (key: string) => {
    setExpandedItems((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const filteredData = useMemo(() => {
    if (!searchQuery) return faqData;

    return Object.entries(faqData).reduce(
      (acc, [category, items]) => {
        const filteredItems = items.filter(
          (item) =>
            item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.children.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        if (filteredItems.length > 0) {
          (acc as any)[category] = filteredItems;
        }
        return acc;
      },
      {} as typeof faqData,
    );
  }, [searchQuery]);

  // Auto-expand items with matches
  useEffect(() => {
    if (!searchQuery) {
      setExpandedItems([]);
      return;
    }

    const matchedItems: string[] = [];
    Object.values(filteredData).forEach((items) => {
      items.forEach((item) => {
        if (
          item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.children.toLowerCase().includes(searchQuery.toLowerCase())
        ) {
          matchedItems.push(item.key);
        }
      });
    });
    setExpandedItems(matchedItems);
  }, [searchQuery, filteredData]);

  // Find and set active tab with matches
  useEffect(() => {
    if (!searchQuery) return;

    const tabWithMatches = tabItems.find((tab) => {
      const categoryKey = tab.label.toLowerCase().replace(/[^a-zA-Z]/g, '');
      return (filteredData as any)[categoryKey]?.length > 0;
    });

    if (tabWithMatches) {
      setActiveTab(tabWithMatches.key);
    }
  }, [searchQuery, filteredData]);

  return (
    <section className="bg-gray-50 min-h-screen py-8 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-2xl font-light text-black-2 md:text-3xl">{t`FAQs`}</h2>
          <h1 className="mb-6 text-4xl font-bold text-black-2 md:text-5xl">{t`Frequently asked questions`}</h1>
          <h3 className="text-xl font-light text-black-2 md:text-2xl">{t`Have questions? We're here to help`}</h3>
        </div>

        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="flex flex-col gap-8 md:flex-row">
          <TabNav activeTab={activeTab} setActiveTab={setActiveTab} searchQuery={searchQuery} filteredData={filteredData} />

          <div className="md:w-3/4">
            {tabItems.map((tab) => (
              <div key={tab.key} className={activeTab === tab.key ? 'block' : 'hidden'}>
                {(filteredData as any)[tab.label.toLowerCase().replace(/[^a-zA-Z]/g, '')] &&
                  (filteredData as any)[tab.label.toLowerCase().replace(/[^a-zA-Z]/g, '')].map((item: any) => (
                    <FAQItem
                      key={item.key}
                      item={item}
                      isExpanded={expandedItems.includes(item.key)}
                      onToggle={() => toggleItem(item.key)}
                      searchQuery={searchQuery}
                    />
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
