import { useLocation } from "react-router-dom";
import { BookMarkButton } from "../components/BookMarkButton";
import { FavoriteButton } from "../components/FavoriteButton";

export const ArticleDetail = () => {
  const location = useLocation();
  const currentPass = location.pathname.substring(9);

  // 仮の記事データ
  const article = {
    title: "記事のタイトル",
    author: "著者名",
    content:
      "記事の本文。ここに記事の詳細情報や本文を表示します。Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    imageUrl: "https://example.com/article-image.jpg",
    publishedAt: "2023-10-06T12:10:06Z",
  };

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="mb-10">
          <BookMarkButton iconStyle="blue" />
          <FavoriteButton iconStyle="red" />
        </div>
        {/* 記事のタイトル */}
        <h1 className="text-3xl font-semibold mb-4">{article.title}</h1>

        {/* 記事の著者 */}
        <p className="text-gray-500 mb-4">著者: {article.author}</p>

        {/* 記事の画像 */}
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full rounded-lg mb-4"
        />

        {/* 記事の本文 */}
        <p className="text-gray-700">{article.content}</p>
        <p className="text-gray-700 mt-10">{article.publishedAt}</p>
      </div>
    </div>
  );
};
