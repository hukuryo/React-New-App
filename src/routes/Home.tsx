import React, { useState, useEffect } from "react";
import { NewsList } from "../components/NewsList";
import axios from "axios";
import { API_KEY } from "../../lib/client";

type Article = {
  imageUrl: string;
  author: string;
  title: string;
};

const URL = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=b7b516733fb945e0a34703a8dba3b8c1`;

export const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchNewsLists = async () => {
      try {
        const response = await axios.get(URL);
        console.log(response);
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNewsLists();
  }, []);

  return (
    <div>
      <NewsList />
    </div>
  );
};
