import React, { ReactNode } from "react";

import "./Section.module.scss";

interface Props {
  children: ReactNode;
}

export function Section({ children }: Props): JSX.Element {
  return <section className="section">{children}</section>;
}
