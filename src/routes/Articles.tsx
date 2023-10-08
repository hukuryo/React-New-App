import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../lib/client";
import { faHome, faNewspaper } from "@fortawesome/free-solid-svg-icons";

import { NewsList } from "../components/NewsList";
import { Loading } from "../components/Loading";
import { Article } from "../types/article";
import { PageTitle } from "../components/PageTitle";

export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="bg-gray-100">
      <div className="p-8">
        <PageTitle pageTitle={"ホーム"} iconName={faHome} />
        {loading ? <Loading /> : <NewsList articles={articles} />}
      </div>
    </div>
  );
};
