import React from "react";
import { Link } from "react-router-dom";
import styles from "./Error.module.css";
const ErrorPage = () => {
  return (
    <div className={styles["error-page"]}>
      <h1>404 not found!</h1>
      <Link to="/">Home Page!</Link>
    </div>
  );
};
export default ErrorPage;
