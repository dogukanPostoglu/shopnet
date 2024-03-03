import React from "react";
import styles from "./ImageModal.module.css";
const ImageModal = ({ info, closeModal }) => {
  const { imageLink } = info;
  const preventFunc = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={styles["wrapper"]} onClick={closeModal}>
      <div className={styles["image-content"]}>
        <img src={imageLink} alt="product_img" onClick={preventFunc} />
      </div>
    </div>
  );
};

export default ImageModal;
