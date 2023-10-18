import { useState, useEffect } from "react";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import { NewsList } from "../components/NewsList";
import { Loading } from "../components/Loading";
import { PageTitle } from "../components/PageTitle";
import { useSelector } from "react-redux";

export const Favorite = () => {
  const [loading, setLoading] = useState(true);

  const favoriteArticles = useSelector(
    (state: any) => state.favorite.favorites
  );

  useEffect(() => {
    const fetchNewsLists = async () => {
      try {
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
      <PageTitle pageTitle="お気に入りの記事" iconName={faHeart} />
      {loading ? (
        <Loading />
      ) : (
        <NewsList
          articles={favoriteArticles}
          noArticleMessage={"お気に入りの記事はありません"}
        />
      )}
    </div>
  );
};
