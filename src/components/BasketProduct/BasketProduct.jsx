import React, { useContext } from "react";
import styles from "./BasketProduct.module.css";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { MyGlobalContext } from "../../context";
const BasketProduct = ({ info }) => {
  const { deleteBasketItem } = useContext(MyGlobalContext);
  const { id, brand, description, price, thumbnail } = info;
  const handleDelete = () => {
    deleteBasketItem(id);
  };
  return (
    <div className={styles["basket-product"]}>
      <Link to={`/products/${id}`} className={styles["product-detail-wrapper"]}>
        <div className={styles["product-detail"]}>
          <img src={thumbnail} alt="basket-product-image" />
          <div>
            <b>{brand} </b>
            <span>{description}</span>
          </div>
        </div>
      </Link>
      <span className={styles["price"]}>{price} TL</span>
      <span className={styles["delete-btn"]} onClick={handleDelete}>
        <FaRegTrashAlt />
      </span>
    </div>
  );
};

export default BasketProduct;
