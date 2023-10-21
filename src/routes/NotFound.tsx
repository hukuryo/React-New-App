import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          お探しのページは見つかりませんでした。
        </h1>
        <Link to="/" className="text-blue-500 hover:underline">
          ホームに戻る
        </Link>
      </div>
    </div>
  );
};
