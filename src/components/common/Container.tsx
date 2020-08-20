import React, { ReactNode } from "react";
import classname from "classnames/bind";

import styles from "./Container.module.scss";

interface ContainerProps {
  wide?: boolean;
  children: ReactNode;
  style?: string;
}

const cx = classname.bind(styles);

export const Container: React.FC<ContainerProps> = ({
  wide = false,
  children,
  style,
}) => {
  return <div className={cx(style, { container: true, wide })}>{children}</div>;
};
