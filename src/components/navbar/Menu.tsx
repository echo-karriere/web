import React from "react";
import MenuItem from "./MenuItem";
import classNamesBind from "classnames/bind";

import useNavigationData, { NavItem } from "../../queries/useNavigationData";
import AngleRight from "../../assets/angle-right-solid.svg";
import styles from "./Menu.module.scss";

const cx = classNamesBind.bind(styles);

interface Props {
  open: boolean;
}

const RightArrow: React.FC = () => (
  <img src={AngleRight} alt="Indicator of link" className={styles.rightArrow} />
);

const Menu: React.FC<Props> = ({ open }) => {
  const navigation = useNavigationData();

  return (
    <nav
      className={cx("menu", { menuOpen: open, menuClosed: !open })}
      aria-label="Main navigation"
      aria-hidden={!open}
      aria-expanded={open}
    >
      <ul className={styles.ul}>
        {navigation.map(({ children, name, url }: NavItem) =>
          children ? (
            <li className={cx("dropdown", { li: true })} key={url}>
              <MenuItem title={name} to={url} icon />
              <ul className={styles.dropdownContent}>
                {children.map((it) => (
                  <li key={it.url} className={styles.submenu}>
                    <MenuItem title={it.name} to={it.url} /> <RightArrow />
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li className={styles.li} key={url}>
              <MenuItem title={name} to={url} />
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};

export default Menu;
