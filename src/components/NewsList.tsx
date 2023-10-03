import Image, { FC } from "react";

type Article = {
  imageUrl: string;
  author: string;
  title: string;
};

export const NewsList = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          ニュース一覧
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="news1.jpg"
              alt="ニュース1"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                ニュースタイトル1
              </h2>
              <p className="text-gray-600">
                ニュースの要約や詳細情報がここに表示されます。ニュースの要約や詳細情報がここに表示されます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
