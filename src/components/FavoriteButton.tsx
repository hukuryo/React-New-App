import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { favoriteButton } from "../types/favoriteButton";

export const FavoriteButton: FC<favoriteButton> = (props) => {
  const { iconStyle, favoriteArticle } = props;

  return (
    <button className="ml-2 hover:opacity-75" onClick={favoriteArticle}>
      <FontAwesomeIcon
        icon={faHeart}
        size={"2xl"}
        style={{ color: iconStyle }} // カスタムカラーを指定
      />
    </button>
  );
};
