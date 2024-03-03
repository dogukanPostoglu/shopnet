import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { MyGlobalContext } from "../../context";
import styles from "./ProductDetail.module.css";
import { GoZoomIn } from "react-icons/go";
import ImageModal from "../../components/ImageModal/ImageModal";
const ProductDetail = () => {
  const [imageModal, setImageModal] = useState(null);
  const { productList, isLoading, basket, addToBasket } =
    useContext(MyGlobalContext);
  const { productId } = useParams();
  if (isLoading) {
    return <h1>Loading Details...</h1>;
  }
  const product = productList.find((item) => item.id == productId);
  const { id, thumbnail, price, brand, category, description } = product;
  const handleImageModal = () => {
    setImageModal({ imageLink: thumbnail });
  };
  const closeImageModal = () => {
    setImageModal(null);
  };
  if (imageModal) {
    document.querySelector("body").style.overflowY = "hidden";
  } else {
    document.querySelector("body").style.overflowY = "visible";
  }
  const handleBasket = () => {
    addToBasket(product);
  };
  const isInBasket = basket.find((item) => item.id == id);
  return (
    <>
      <div className={styles["product-container"]}>
        <div
          className={styles["product-image-container"]}
          onClick={handleImageModal}
        >
          <img
            src={thumbnail}
            alt="product-image"
            className={styles["product-image"]}
          />
          <span>
            <GoZoomIn />
          </span>
        </div>
        <div className={styles["product-details"]}>
          <div className={styles["product-title"]}>
            <b>{brand} </b>
            {description}
          </div>
          <div className={styles["product-company"]}>
            Company: <span>{brand}</span>
          </div>
          <div className={styles["product-price"]}>{price} TL</div>
          <hr />
          <p className={styles["category"]}>
            Category: <span>{category}</span>
          </p>
          <button
            disabled={isInBasket}
            onClick={handleBasket}
            className={`${styles["add-btn"]} ${
              isInBasket ? styles["disabled"] : ""
            }`}
          >
            Add to Basket
          </button>
        </div>
      </div>
      {imageModal && (
        <ImageModal info={imageModal} closeModal={closeImageModal} />
      )}
    </>
  );
};
export default ProductDetail;
