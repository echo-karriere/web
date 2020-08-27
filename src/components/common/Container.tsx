import React, { ReactNode } from "react";
import classname from "classnames/bind";

import styles from "./Container.module.scss";

interface ContainerProps {
  wide?: boolean;
  children: ReactNode;
  style?: string;
}

const cx = classname.bind(styles);

export function Container({
  wide = false,
  children,
  style,
}: ContainerProps): JSX.Element {
  return <div className={cx(style, { container: true, wide })}>{children}</div>;
}
