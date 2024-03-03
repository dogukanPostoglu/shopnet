import React, { useContext } from "react";
import styles from "./Card.module.css";
import { MyGlobalContext } from "../../context";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
const Card = ({ data }) => {
  const { favoritesList, toggleFavorites } = useContext(MyGlobalContext);
  const { id, thumbnail, title, price } = data;
  const handleFavoritesList = () => {
    toggleFavorites(id, data);
  };
  const isActive = favoritesList.find((item) => item.id === id);
  return (
    <>
      <article className={styles["product"]}>
        <div
          className={`${styles["add-to-favorite"]} ${
            isActive ? styles["active"] : ""
          }`}
          onClick={handleFavoritesList}
        >
          <CiHeart />
        </div>
        <Link to={`/products/${id}`}>
          <div className={styles["image-section"]}>
            <img
              src={thumbnail}
              alt="product_image"
              className={styles["product-image"]}
            />
          </div>
        </Link>
        <div className={styles["product-info"]}>
          <h3 className={styles["product-brand"]}>{title}</h3>
          <h3 className={styles["product-price"]}>{price} TL</h3>
        </div>
      </article>
    </>
  );
};
export default Card;
