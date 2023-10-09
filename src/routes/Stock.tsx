import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../lib/client";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { NewsList } from "../components/NewsList";
import { Loading } from "../components/Loading";
import { PageTitle } from "../components/PageTitle";
import { Article } from "../types/article";
import { useSelector } from "react-redux";

export const Stock = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const clips = useSelector((state: any) => state.clip.clips);

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
    <div className="p-8">
      <PageTitle pageTitle="ストック記事" iconName={faBookmark} />
      {loading ? <Loading /> : <NewsList articles={clips} />}
    </div>
  );
};
