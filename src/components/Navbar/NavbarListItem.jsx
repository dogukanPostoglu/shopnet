import React from "react";
import styles from "./Navbar.module.css";
const NavbarListItem = ({ item, children }) => {
  const { icon, text } = item;
  return (
    <div className={styles["navbar-list-item"]}>
      {icon}
      {text}
      {children}
    </div>
  );
};
export default NavbarListItem;
