import React, { useState } from 'react'
import Logo from "../../public/logo.svg"
import Basket from "../../public/basket.svg"
import Hamburger from "../../public/hamburger.svg"
import { Link } from 'react-router-dom'
import styles from "./index.module.css"

function Header() {
    const [show, setShow] = useState(false)

    function showNav(){
        if(show){
            setShow(false)
        }else{
            setShow(true)
        }
    }
  return (
    <header>
            <div className={styles.header__content}>
                <div className={styles.responsive}>
                <div className={styles.hamburger}>
                    <img onClick={showNav} src={Hamburger} alt="" />
                </div>
                {show && <div className={styles.column__links}>
                    <ul>
                        <Link style={{textDecoration: "none", color: "white"}} to="/"><li>HOME</li></Link>
                        <Link style={{textDecoration: "none", color: "white"}} to="/page/HEADPHONES"><li>HEADPHONES</li></Link>
                        <Link style={{textDecoration: "none", color: "white"}} to="/page/SPEAKERS"><li>SPEAKERS</li></Link>
                        <Link style={{textDecoration: "none", color: "white"}} to="/page/EARPHONES"><li>EARPHONES</li></Link>
                    </ul>
                </div>}
                </div>
                <div className={styles.header__logo}>
                    <Link to="/">
                    <img src={Logo}/>
                    </Link>
                </div>
                <div className={styles.links}>
                    <ul>
                        <Link to="/"><li>HOME</li></Link>
                        <Link to="/page/HEADPHONES"><li>HEADPHONES</li></Link>
                        <Link to="/page/SPEAKERS"><li>SPEAKERS</li></Link>
                        <Link to="/page/EARPHONES"><li>EARPHONES</li></Link>
                    </ul>
                </div>
                <div className={styles.basket}>
                    <img src={Basket}/>
                </div>
            </div>
            <div className={styles.border}></div>
    </header>
  )
}

export default Header
