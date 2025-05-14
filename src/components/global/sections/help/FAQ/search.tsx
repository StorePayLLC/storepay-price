import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export function Search({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="relative mx-auto mb-4 max-w-2xl rounded-3xl border-[1px] border-[#C0C5CB] bg-white md:mb-12">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-gray-300 focus:ring-blue-500 w-full rounded-full border px-12 py-3 focus:border-transparent focus:outline-none focus:ring-2"
      />
      <SearchIcon className="text-gray-400 absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2" />
    </div>
  );
}
