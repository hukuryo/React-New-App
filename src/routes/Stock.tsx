import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../lib/client";

import { NewsList } from "../components/NewsList";
import { Loading } from "../components/Loading";
import { PageTitle } from "../components/PageTitle";
import { Article } from "../types/article";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${API_KEY}`;

export const Stock = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsLists = async () => {
      try {
        const response = await axios.get(URL);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };
    fetchNewsLists();
  }, []);

  return (
    <div className="bg-gray-100">
      <div className="p-8">
        <PageTitle pageTitle="お気に入りの記事" iconName={faBookmark} />
        {loading ? <Loading /> : <NewsList articles={articles} />}
      </div>
    </div>
  );
};
