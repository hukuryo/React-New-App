import { FC } from "react";

import { Link, useLocation } from "react-router-dom";
import { Article } from "../types/article";

type ArticleList = {
  articles: Article[];
  noArticleMessage: string;
};

export const NewsList: FC<ArticleList> = ({ articles, noArticleMessage }) => {
  if (articles.length === 0) {
    return <div>{noArticleMessage}</div>;
  }

  const articlesLength = articles.length;

  return (
    <div className="mt-10">
      <p className="mb-5">{articlesLength}件の記事を表示中</p>
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div
              className="bg-white rounded-lg transition-transform transform shadow-md hover:opacity-75"
              key={index}
            >
              <div>
                <Link to={`/article/${article.publishedAt}`} className="flex">
                  <img
                    src={article.urlToImage}
                    alt="ニュース1"
                    className="w-60 h-60 object-cover rounded-l-lg"
                  />
                  <div className="px-2 pt-4 pb-2 pr-10">
                    <h2 className="text-xl font-semibold text-gray-800 mb-2">
                      {article.title}
                    </h2>
                    <p className="text-gray-600"></p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
