import React, { FC } from "react";
import { Link } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        placeholder="記事のタイトルを入力"
        value={value}
        onChange={onChange}
        className="w-80 p-2 rounded border shadow-md"
      />
      <Link to={`article/search?s=${value}`}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-md shadow-md"
          onClick={onSearch}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} className="px-2"></FontAwesomeIcon>
        </button>
      </Link>
    </div>
  );
};
