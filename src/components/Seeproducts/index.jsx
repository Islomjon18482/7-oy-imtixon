import React from 'react'
import styles from "./index.module.css"
import { Link } from 'react-router-dom'

function Seeproducts() {
  return (
    <div className={styles.more__wrapper}>
        <div className={styles.zx9__wrapper}>
                <div className={styles.zx9Card__img}>
                    <img src="./zx9.png"/>
                </div>
                <div className={styles.zx9Card__text}>
                    <h2>ZX9 SPEAKER</h2>
                    <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
                    <Link to="/product/6">
                        <button>See Product</button>
                    </Link>
                </div>
        </div>
        <div className={styles.zx7__wrapper}>
            <h2>ZX7 SPEAKER</h2>
            <Link to="/product/5">
                <button>See Product</button>
            </Link>
        </div>
        <div className={styles.xy1__wrapper}>
            <img src="./earphone.png" />
            <div className={styles.xy1__text}>
                <h2>YX1 EARPHONES</h2>
                <Link to="/product/1">
                    <button>See Product</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Seeproducts
