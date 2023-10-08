import React, { FC } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "../types/iconStyle";

// iconStyleをpropsとして受け取る
export const BookMarkButton: FC<Icon> = (props) => {
  const { iconStyle } = props; // propsからiconStyleを取り出す

  return (
    <button className="ml-1">
      <FontAwesomeIcon
        icon={faBookmark}
        size={"2xl"}
        style={{ color: iconStyle }}
      />
    </button>
  );
};
