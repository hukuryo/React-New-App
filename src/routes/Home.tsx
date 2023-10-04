import { useState, useEffect } from "react";
import axios from "axios";
import { API_KEY } from "../lib/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { NewsList } from "../components/NewsList";
import { Loading } from "../components/Loading";

type Article = {
  id: number;
  url: string;
  author: string;
  title: string;
  urlToImage: string;
};

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${API_KEY}`;

export const Home = () => {
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
        <h1 className="text-3xl font-semibold mb-6">ニュース一覧</h1>
        {loading ? <Loading /> : <NewsList articles={articles} />}
      </div>
    </div>
  );
};
