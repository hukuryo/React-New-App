import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Icon } from "../types/iconStyle";

export const FavoriteButton: FC<Icon> = (props) => {
  const { iconStyle } = props;

  return (
    <button className="ml-2">
      <FontAwesomeIcon
        icon={faHeart}
        size={"2xl"}
        style={{ color: iconStyle }} // カスタムカラーを指定
      />
    </button>
  );
};
