import React from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

function Newproduct() {
  return (
    <div className={styles.newproduct}>
      <div className={styles.product__text}>
        <h4>NEW PRODUCT</h4>
        <h2>XX99 Mark II Headphones</h2>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link to="/product/4">
         <button>See Product</button>
        </Link>
      </div>
      <div className={styles.product__img}>
        <img src="./blackHeadphones.png"/>
      </div>
    </div>
  );
}

export default Newproduct;
