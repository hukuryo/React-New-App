import { FC } from "react";

import { Link } from "react-router-dom";
import { Article } from "../types/article";

type ArticleList = {
  articles: Article[];
};

export const NewsList: FC<ArticleList> = ({ articles }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div
              className="bg-white rounded-lg transition-transform transform hover:scale-105 hover:opacity-80 shadow-md overflow-hidden"
              key={index}
            >
              <Link to={`/article/${article.title}`}>
                <img
                  src={article.urlToImage}
                  alt="ニュース1"
                  className="w-full h-40 object-cover"
                />
                <div className="px-2 pt-4 pb-2">
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600"></p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
