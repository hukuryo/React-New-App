import Image, { FC } from "react";

type Article = {
  id: number;
  url: string;
  author: string;
  title: string;
  urlToImage: string;
};

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
              className="bg-white rounded-lg shadow-md overflow-hidden"
              key={index}
            >
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
