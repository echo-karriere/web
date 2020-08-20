import React, { ReactNode } from "react";

import "./Section.module.scss";

interface Props {
  children: ReactNode;
}

export const Section: React.FC<Props> = ({ children }) => {
  return <section className="section">{children}</section>;
};
