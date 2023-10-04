import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <FontAwesomeIcon icon={faSpinner} size="2x" spin />
    </div>
  );
};
