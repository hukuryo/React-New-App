import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart, faHome } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold hover:opacity-70">
          <Link to={`/Articles`}>News App</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li className="hover:opacity-70 font-bold">
              <Link to={`/`}>
                <FontAwesomeIcon icon={faHome} className="pr-1" />
                ホーム
              </Link>
            </li>
            <li className="hover:opacity-70 font-bold">
              <Link to="/Stock">
                <FontAwesomeIcon icon={faBookmark} className="pr-1" />
                あとで読む
              </Link>
            </li>
            <li className="hover:opacity-70 font-bold">
              <Link to="/Favorite">
                <FontAwesomeIcon icon={faHeart} className="pr-1" />
                お気に入りの記事
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
