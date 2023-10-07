import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

type PageTitleProps = {
  pageTitle: string;
  iconName: IconDefinition;
};

export const PageTitle: FC<PageTitleProps> = ({ pageTitle, iconName }) => {
  return (
    <h1 className="text-3xl font-semibold mb-6">
      <FontAwesomeIcon icon={iconName} /> {pageTitle}
    </h1>
  );
};
