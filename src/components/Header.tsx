import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">News App</div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:underline">
              <a>
                <Link to={`/Home`}>ホーム</Link>
              </a>
            </li>
            <li className="hover:underline">
              <Link to="/Stock">あとで読む</Link>
            </li>
            <li className="hover:underline">
              <Link to="/Favorite">お気に入りの記事</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
