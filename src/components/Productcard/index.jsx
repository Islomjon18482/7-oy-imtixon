import React from 'react'
import styles from "./index.module.css"
import { Link } from 'react-router-dom'

function Productcard(props) {
  let flexDirection = ''
  if(props.status == "right"){
    flexDirection = "row-reverse"
  }else{
    flexDirection = "reverse"
  }
  return (
    <div style={{flexDirection: `${flexDirection}`}} className={styles.card__wrapper}>
      <div className={styles.card__img}>
        <img src={`../../../public${props.data.image}`}/>
      </div>
        <div className={styles.card__text}>
            <h4>NEW PRODUCT</h4>
            <h2>{props.data.name}</h2>
            <p>{props.data.description}</p>
            <Link to={`/product/${props.data.id}`}>
              <button>See Product</button>
            </Link>
        </div>
    </div>
  )
}

export default Productcard
