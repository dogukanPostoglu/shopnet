import React, { useContext } from "react";
import { MyGlobalContext } from "../../context";
import styles from "./Products.module.css";
import Card from "../UI/Card";
const Products = () => {
  const { filteredProductList } = useContext(MyGlobalContext);
  return (
    <section className={styles["products"]}>
      {filteredProductList.map((product) => {
        return <Card key={product.id} data={product} />;
      })}
    </section>
  );
};
export default Products;
