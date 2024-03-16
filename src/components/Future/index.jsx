import React from 'react'
import styles from "./index.module.css"
import CardFutured from './Card'

function Futured() {
  return (
    <div className={styles.futured__wrapper}>
      <CardFutured title="HEADPHONES" image="../../../public/cardHeadphone.png"></CardFutured>
      <CardFutured title="SPEAKERS" image="../../../public/zx9.png"></CardFutured>
      <CardFutured title="EARPHONES" image="../../../public/xy1.png"></CardFutured>
    </div>
  )
}

export default Futured
