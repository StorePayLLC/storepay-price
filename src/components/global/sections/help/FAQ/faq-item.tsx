import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface FAQItemProps {
  item: { key: string; label: string; children: string };
  isExpanded: boolean;
  onToggle: () => void;
  searchQuery: string;
}

function highlightText(text: string, query: string) {
  if (!query) return text;

  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-yellow-200 rounded px-0.5">
        {part}
      </mark>
    ) : (
      part
    ),
  );
}

export function FAQItem({ item, isExpanded, onToggle, searchQuery }: FAQItemProps) {
  return (
    <div className="border-gray-200 border-t border-[#D5D8DC]">
      <button onClick={onToggle} className="hover:bg-gray-50 flex w-full items-center justify-between p-4 text-left">
        <span className={`text-gray-900 ${isExpanded ? 'font-bold text-black-2' : 'font-normal'}`}>
          {highlightText(item.label, searchQuery)}
        </span>
        {isExpanded ? (
          <Minus className="text-gray-500 h-5 w-5 flex-shrink-0" />
        ) : (
          <Plus className="text-gray-500 h-5 w-5 flex-shrink-0" />
        )}
      </button>
      {isExpanded && (
        <div className="mb-3 rounded-lg bg-[#EAECEE] p-3">
          <p className="text-sm font-light text-black-2">{highlightText(item.children, searchQuery)}</p>
        </div>
      )}
    </div>
  );
}
