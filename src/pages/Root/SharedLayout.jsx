import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
const SharedLayout = () => {
  const location = useLocation();
  const isBasket = location.pathname === "/basket";
  return (
    <div className={`${!isBasket ? "container" : ""}`}>
      <Navbar isBasket={isBasket} />
      <Outlet />
    </div>
  );
};

export default SharedLayout;
