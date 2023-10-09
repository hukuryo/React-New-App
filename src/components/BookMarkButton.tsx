import React, { FC } from "react";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icon } from "../types/iconStyle";

// iconStyleをpropsとして受け取る
export const BookMarkButton: FC<Icon> = (props) => {
  const { iconStyle, addClip } = props;

  return (
    <button className="ml-1 hover:opacity-75" onClick={addClip}>
      <FontAwesomeIcon
        icon={faBookmark}
        size={"2xl"}
        style={{ color: iconStyle }}
      />
    </button>
  );
};
