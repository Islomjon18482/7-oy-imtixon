import React from 'react'
import styles from "./index.module.css"
import Logo from "../../public/logo.svg"
import F from "../../public/f.svg"
import I from "../../public/i.svg"
import T from "../../public/t.svg"
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.footer__nav}>
          <div className="footer__logo">
                    <Link to="/">
                    <img src={Logo}/>
                    </Link>
          </div>
          <div className={styles.footer__links}>
                    <ul>
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/page/HEADPHONES"><li>HEADPHONES</li></Link>
                        <Link to="/page/SPEAKERS"><li>SPEAKERS</li></Link>
                        <Link to="/page/EARPHONES"><li>EARPHONES</li></Link>
                    </ul>
                </div>
        </div>
        <div className={styles.footer__description}>
          <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
          <div className={styles.social}>
              <img src={F}/>
              <img src={T}/>
              <img src={I}/>
          </div>
        </div>
        <div className={styles.licen}>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
