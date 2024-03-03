import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { MyGlobalContext } from "../../context";
import { Link } from "react-router-dom";
import { navbarData } from "../../data";
import NavbarListItem from "./NavbarListItem";
import styles from "./Navbar.module.css";
const Navbar = ({ isBasket }) => {
  const { basket, isExpanded, toggleNavbar, searchValue, handleSearchValue } =
    useContext(MyGlobalContext);
  return (
    <nav
      className={`${styles["navbar"]} ${isExpanded ? styles["expanded"] : ""} ${
        isBasket ? styles["active"] : ""
      }`}
    >
      <div className={styles["nav-header"]}>
        <Link to="/">
          <img
            src="https://react-vite-projects-11-navbar.netlify.app/assets/logo-ddc33e51.svg"
            alt="project_logo"
            className={styles["project-logo"]}
          />
        </Link>
        <button className={styles["toggle-navbar"]} onClick={toggleNavbar}>
          <FaBars />
        </button>
      </div>
      <div className={styles["search-section"]}>
        <input
          type="text"
          placeholder="Search any product..."
          onChange={handleSearchValue}
          value={searchValue}
        />
        <FaSearch className={styles["search-icon"]} />
      </div>
      <div className={styles["navbar-list"]}>
        {navbarData.map((item) => {
          return (
            <Link key={item.id} to={item.url}>
              <NavbarListItem item={item}>
                {item.text === "Basket" && <span>{basket.length}</span>}
              </NavbarListItem>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
