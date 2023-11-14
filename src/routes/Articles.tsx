import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../lib/client";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import { Header } from "../components/Header";
import { NewsList } from "../components/NewsList";
import { Loading } from "../components/Loading";
import { Article } from "../types/article";
import { PageTitle } from "../components/PageTitle";
import { SearchForm } from "../components/SearchForm";
import { ScrollUp } from "../components/ScrollUp";

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
        setLoading(false);
        return <div>ニュースが取得できませんでした</div>;
      }
    };
    fetchNewsLists();
  }, []);

  const searchArticles = () => {
    const filterArticles = articles.filter((article) =>
      article.title.includes(searchQuery)
    );
    setArticles(filterArticles);
  };

  return (
    <>
      <Header />
      <div className="p-8">
        <PageTitle pageTitle={"ホーム"} iconName={faHome} />
        {loading ? (
          <Loading />
        ) : (
          <>
            <SearchForm
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              onSearch={searchArticles}
            />
            <NewsList
              articles={articles}
              noArticleMessage={"記事が取得できませんでした。"}
            />
          </>
        )}
        <ScrollUp />
      </div>
    </>
  );
};
