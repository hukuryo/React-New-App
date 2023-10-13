import React, { FC } from "react";

type SearchForm = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
};

export const SearchForm: FC<SearchForm> = ({ value, onChange, onSearch }) => {
  return (
    <div className="flex justify-end">
      <input
        type="text"
        placeholder="記事を検索..."
        value={value}
        onChange={onChange}
        className="w-80 p-2 rounded border"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md"
        onClick={onSearch}
      >
        検索
      </button>
    </div>
  );
};
