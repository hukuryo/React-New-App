import { useState, useEffect } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { NewsList } from "../components/NewsList";
import { Loading } from "../components/Loading";
import { PageTitle } from "../components/PageTitle";
import { useSelector } from "react-redux";
import { ScrollUp } from "../components/ScrollUp";

export const Stock = () => {
  const [loading, setLoading] = useState(true);
  const clips = useSelector((state: any) => state.clip.clips);

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
      <PageTitle pageTitle="ストック記事" iconName={faBookmark} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <NewsList
            articles={clips}
            noArticleMessage={"登録されている記事はありません。"}
          />
          <ScrollUp />
        </>
      )}
    </div>
  );
};
