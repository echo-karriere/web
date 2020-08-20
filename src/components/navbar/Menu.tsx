import React from "react";
import MenuItem from "./MenuItem";
import useNavigationData, { NavItem } from "../../queries/useNavigationData";
import classNamesBind from "classnames/bind";

import styles from "./Menu.module.scss";

const cx = classNamesBind.bind(styles);

interface Props {
  open: boolean;
}

const Menu: React.FC<Props> = ({ open }) => {
  const navigation = useNavigationData();

  return (
    <nav
      className={cx("menu", { menuOpen: open, menuClosed: !open })}
      aria-hidden={!open}
    >
      <div className={styles.item}>
        {navigation.map((nav: NavItem) => (
          <MenuItem title={nav.title} to={nav.link} key={nav.link} />
        ))}
      </div>
    </nav>
  );
};
export default Menu;
