import React, { useContext } from "react";
import Products from "../../components/Products/Products";
import { MyGlobalContext } from "../../context";
const Home = () => {
  const { isLoading } = useContext(MyGlobalContext);
  if (isLoading) {
    return <h1>Loading products...</h1>;
  }
  return <Products />;
};
export default Home;
