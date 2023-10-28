import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../lib/client";
import { faHome, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { NewsList } from "../components/NewsList";
import { Loading } from "../components/Loading";
import { Article } from "../types/article";
import { PageTitle } from "../components/PageTitle";
import { SearchForm } from "../components/SearchForm";
import { ScrollUp } from "../components/ScrollUp";
import { useLocation, useSearchParams } from "react-router-dom";

type ArticleTitle = {
  title: string;
};

export const ArticleSearch = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const searchWord = useLocation().search.substring(3);

  useEffect(() => {
    const fetchNewsLists = async () => {
      try {
        const response = await axios.get(API_URL);
        const searchArticles = response.data.articles;
        const filterArticles = searchArticles.filter((article: ArticleTitle) =>
          article.title.includes(searchWord)
        );
        setArticles(filterArticles);
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
    <div className="p-8">
      <PageTitle
        pageTitle={`"${searchWord}"の検索結果`}
        iconName={faMagnifyingGlass}
      />
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
            noArticleMessage={"該当する記事は見つかりませんでした。"}
          />
        </>
      )}
      <ScrollUp />
    </div>
  );
};
