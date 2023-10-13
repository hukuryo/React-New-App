import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../lib/client";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { NewsList } from "../components/NewsList";
import { Loading } from "../components/Loading";
import { Article } from "../types/article";
import { PageTitle } from "../components/PageTitle";

export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchNewsLists = async () => {
      try {
        const response = await axios.get(API_URL);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };
    fetchNewsLists();
  }, []);

  const searchArticles = () => {
    const filterArticles = articles.filter((article) =>
      article.title.includes(searchQuery)
    );
    console.log(filterArticles);
    setArticles(filterArticles);
  };

  return (
    <div className="p-8">
      <input
        type="text"
        placeholder="記事を検索..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-80 p-2 rounded border mb-4"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white p-2"
        onClick={searchArticles}
      >
        検索
      </button>
      <PageTitle pageTitle={"ホーム"} iconName={faHome} />
      {loading ? <Loading /> : <NewsList articles={articles} />}
    </div>
  );
};
