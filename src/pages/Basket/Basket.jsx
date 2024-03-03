import React, { useContext } from "react";
import styles from "./Basket.module.css";
import { MyGlobalContext } from "../../context";
import BasketProduct from "../../components/BasketProduct/BasketProduct";
import { MdAddShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
const Basket = () => {
  const { basket } = useContext(MyGlobalContext);
  if (basket.length === 0) {
    return (
      <div className={styles["basket-alert"]}>
        <span>
          <MdAddShoppingCart />
        </span>
        <p>You have nothing in your basket.</p>
        <Link to="/">Start Shopping!</Link>
      </div>
    );
  }
  const price = basket.reduce((totalSum, currentValue) => {
    return totalSum + currentValue.price;
  }, 0);
  return (
    <>
      <div className={styles["basket-section"]}>
        {basket.map((item) => {
          return <BasketProduct key={item.id} info={item} />;
        })}
        <h2 className={styles["price"]}>Total Price: {price} TL</h2>
      </div>
    </>
  );
};
export default Basket;
