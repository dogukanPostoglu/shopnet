import React, { useContext } from "react";
import styles from "./FavoriteProducts.module.css";
import { MyGlobalContext } from "../../context";
import Card from "../../components/UI/Card";
const FavoriteProducts = () => {
  const { favoritesList } = useContext(MyGlobalContext);
  if (favoritesList.length === 0) {
    return <h1>No product to show!</h1>;
  }
  return (
    <div className={styles["favorite-products"]}>
      {favoritesList.map((product) => {
        return <Card key={product.id} data={product} />;
      })}
    </div>
  );
};
export default FavoriteProducts;
