import { Link } from "react-router-dom";

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
              <Link to={`/Articles`}>ホーム</Link>
            </li>
            <li className="hover:opacity-70 font-bold">
              <Link to="/Stock">あとで読む</Link>
            </li>
            <li className="hover:opacity-70 font-bold">
              <Link to="/Favorite">お気に入りの記事</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
