import React from "react";
import classNamesBind from "classnames/bind";

import styles from "./Burger.module.scss";

const cx = classNamesBind.bind(styles);

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

export function Burger({ open, setOpen }: Props): JSX.Element {
  return (
    <button
      className={styles.burger}
      onClick={() => setOpen(!open)}
      aria-label="Toggle menu"
      aria-expanded={open}
    >
      <span className={cx("line", { firstOpen: open, firstClosed: !open })} />
      <span className={cx("line", { secondOpen: open, secondClosed: !open })} />
      <span className={cx("line", { thirdOpen: open, thirdClosed: !open })} />
    </button>
  );
}
