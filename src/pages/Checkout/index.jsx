import React from "react";
import styles from "./index.module.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Checkout() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([])
  const cards = useSelector(state => state.cards)

  function openModal(e) {
    e.stopPropagation()
    setShow(!show);
  }

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("info")))
    console.log(data)
    if (show) {
      document.addEventListener('click', handleCloseModal);
    } else {
      document.removeEventListener('click',  handleCloseModal);
    }
  }, [show]);

  const handleCloseModal = (event) => {
    if (!event.target.classList.contains(styles.modal)) {
      setShow(false);
    }
  };
  let total = 0
  let length = 0
  let name = ''
  let price = ''
  let img = ''
  let num = 0
  return (
    <>
    <div
        style={show ? { backgroundColor: "black", opacity: "0.4" } : {}}
        className={styles.checkout__wrapper}
      >
        <Link style={{textDecoration: "none", color: "gray"}} to="/">
        
      <p className={styles.go}>Go back</p>
        </Link>
      <div className={styles.form__wrapper}>
        <form>
          <h2>CHECKOUT</h2>
          <div className={styles.build}>
            <p>Billing Details</p>
            <div className={styles.name__email}>
              <label>
                <p>Name</p>
                <input type="text" placeholder="Alexei Ward" />
              </label>
              <label>
                <p>Email</p>
                <input type="email" placeholder="alexei@mail.com" />
              </label>
            </div>
            <label>
              <p>Phone Number</p>
              <input type="text" placeholder="+1 202-555-0136" />
            </label>
          </div>
          <div className={styles.shipping}>
            <p>shipping info</p>
            <label>
              <p>Address</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="1137 Williams Avenue"
              />
            </label>
            <div className={styles.code__city}>
              <label>
                <p>ZIP Code</p>
                <input type="number" name="" id="" placeholder="10001" />
              </label>
              <label>
                <p>City</p>
                <input type="text" name="" id="" placeholder="New York" />
              </label>
            </div>
            <label className={styles.country}>
              <p>Country</p>
              <input type="text" name="" id="" placeholder="United States" />
            </label>
          </div>
          <div className={styles.payments}>
            <p>payment details</p>
            <div className={styles.method}>
              <p>Payment Method</p>
              <div className={styles.select}>
                <div className={styles.money}>
                  <input type="radio" name="cost" id="" />
                  <h3>e-Money</h3>
                </div>
                <div className={styles.card}>
                  <input type="radio" name="cost" id="" />
                  <h3>Cash on Delivery</h3>
                </div>
              </div>
            </div>
            <div className={styles.payment__order}>
              <label>
                <p>e-Money Number</p>
                <input type="text" name="" id="" placeholder="238521993" />
              </label>
              <label>
                <p>e-Money PIN</p>
                <input type="text" name="" id="" placeholder="6891" />
              </label>
            </div>
          </div>
        </form>
        <div className={styles.details}>
          <h2>summary</h2>
          <div className={styles.cards__sumary}>
          {data.map((el, index)=>{
            total += el.num *  el.price
            length = index 
            name = el.name
            price = el.price
            img = el.image
            num = el.num
            return <div key={index} className={styles.card}>
            <div className={styles.img__cost}>
              <div className={styles.card__img}>
                <img src={`../../public${el.image}`} />
              </div>
              <div className={styles.info}>
                <h3>{el.name}</h3>
                <p>$ {el.price}</p>
              </div>
            </div>
            <div className={styles.num}>
              <span>x{el.num}</span>
            </div>
          </div>
          })}
          </div>
          <div className={styles.info1}>
            <div className={styles.price}>
              <h4>TOTAL</h4>
              <span>$ {total}</span>
            </div>
            <div className={styles.price}>
              <h4>SHIPPING</h4>
              <span>$ 50</span>
            </div>
            <div className={styles.price}>
              <h4>VAT (INCLUDED)</h4>
              <span>$ 1,079</span>
            </div>
            <div className={styles.garond__total}>
              <h4>GRAND TOTAL</h4>
              <span>$ {total += 50}</span>
            </div>
          </div>
          <button onClick={(e) => openModal(e)}>CONTINUE & PAY</button>
        </div>
      </div>
    </div>
      {show && <div className={styles.modal}>
        <img src="./tick.png" />
        <h2>THANK YOU FOR YOUR ORDER</h2>
        <p>You will receive an email confirmation shortly.</p>
        <div className={styles.modal__info}>
          <div className={styles.card__info}>
            <div className={styles.card__modal}>
              <img src={`../../${img}`} />
              <div className={styles.modal__text__card}>
                <h5>{name}</h5>
                <h4>$ {price}</h4>
              </div>
                <span>x{num}</span>
            </div>
            <p>and {length} other item(s)</p>
          </div>
          <div className={styles.black__info}>
            <p>GRAND TOTAL</p>
            <h3>$ {total += 50}</h3>
          </div>
        </div>
        <Link style={{textDecoration: "none"}} to="/">
        <button>BACK TO HOME</button>
        
        </Link>
      </div>}
    </>
  );
}

export default Checkout;
