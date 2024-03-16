import React from 'react'
import styles from "./index.module.css"
import Next from "../../../../public/nexticon.svg"
import { Link } from 'react-router-dom'

function CardFutured(props) {
  return (
    <div className={styles.card__wrapper}>
      <div className={styles.card__img}>
          <img src={props.image}/>
          <div className={styles.shadow}></div>
      </div>
      <div className={styles.card__text}>
        <h2>{props.title}</h2>
        <Link style={{textDecoration: "none"}} to={`/page/${props.title}`}>
          <button>
            <p>Shop</p>
            <img src={Next}/>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CardFutured
