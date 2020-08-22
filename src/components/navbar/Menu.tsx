import React, { useState } from "react";
import MenuItem, { MenuItemIcon } from "./MenuItem";
import useNavigationData, { NavItem } from "../../queries/useNavigationData";
import classNamesBind from "classnames/bind";

import downArrow from "../../assets/angle-down-solid.svg";
import upArrow from "../../assets/angle-up-solid.svg";
import styles from "./Menu.module.scss";

const cx = classNamesBind.bind(styles);

interface Props {
  open: boolean;
}

export const DownArrow: React.FC = () => {
  return <img src={downArrow} alt="Expand icon" className={styles.icon} />;
};

export const UpArrow: React.FC = () => {
  return <img src={upArrow} alt="Minimize icon" className={styles.icon} />;
};

const Menu: React.FC<Props> = ({ open }) => {
  const [hover, setHover] = useState(false);
  const navigation = useNavigationData();

  return (
    <nav
      className={cx("menu", { menuOpen: open, menuClosed: !open })}
      aria-hidden={!open}
    >
      {navigation.map(({ children, name, url }: NavItem) =>
        children ? (
          <div
            className={styles.dropdown}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <MenuItemIcon title={name} to={url} open={hover} />
            <div className={styles.dropdownContent}>
              {children.map((it) => (
                <MenuItem title={it.name} to={it.url} key={it.url} />
              ))}
            </div>
          </div>
        ) : (
          <MenuItem title={name} to={url} />
        ),
      )}
    </nav>
  );
};

export default Menu;
