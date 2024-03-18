import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import Futured from "../../components/Future";
import Bring from "../../components/Bring";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function More() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const [num, setNum] = useState(1);
  const { id } = useParams();
  const [loader, setLoader] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState([]);

  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    if (pathname !== "/") {
      const timeout = setTimeout(scrollToTop, 100);
      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  useEffect(() => {
    setLoader(true)
    fetch("http://localhost:3004/ALL")
      .then((res) => res.json())
      .then((data) => {
        data = data.filter((el) => {
          return el.id == id;
        });
        setLoader(false)
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleDecrement = () => {
    if (num > 1) {
      setNum(num - 1);
    }
  };

  const handleIncrement = () => {
    setNum(num + 1);
  };

  function getData(){
    let data = []
    if(localStorage.getItem("info")){
        data = JSON.parse(localStorage.getItem("info"))
    }
    return data
  }

  function openModal(e) {
    let info = {
      id: data[0].id,
      image: data[0].image,
      price: data[0].price,
      name: data[0].name,
      num: num,
    };
    e.stopPropagation();
    setModalShow(!modalShow);
    if(!modalShow){
        dispatch({ type: "ADD_CARD", payload: info });
        let data = getData()
        if(data.length){
            let find = data.map((el)=>{
                return el.id == info.id
            })
            console.log(find)
            if(find){
                let copy = getData()
                copy.map((el)=>{
                    if(el.id == info.id){
                        el.num += info.num
                    }
                })
                localStorage.setItem("info", JSON.stringify(copy))
            }else{
                console.log(data)
                data.push(info)
                localStorage.setItem("info", JSON.stringify(data))
            }
        }else{
            data.push(info)
            localStorage.setItem("info", JSON.stringify(data))
        }
    }
  }

  function remove() {
    localStorage.setItem("info", [])
    dispatch({ type: "REMOVE_CARDS", payload: " " });
  }

  useEffect(() => {
    if (localStorage.getItem("info")) {
      let localInfo = JSON.parse(localStorage.getItem("info"));
      localInfo.map((el) => {
        dispatch({ type: "ADD_CARD", payload: el });
      });
    }
  }, []);

  function handleDecrementModal(id){
    let copy = getData()
    copy.map((el)=>{
        if(el.id == id){
            el.num -= 1
        }
        return el
    })
    localStorage.setItem("info", JSON.stringify(copy))
  }
  function handleIncrementModal(id){
    let copy = getData()
    console.log(copy)
                copy.map((el)=>{
                    if(el.id == id){
                        el.num += 1
                    }
                    return el
    })
    localStorage.setItem("info", JSON.stringify(copy))
  }

//   useEffect(() => {
//     if (modalShow) {
//     //   document.addEventListener('click', handleCloseModal);
//     } else {
//     //   document.removeEventListener('click',  handleCloseModal);
//     }
//   }, [modalShow]);

//   const handleCloseModal = (event) => {
//     if (!event.target.classList.contains(styles.modal)) {
//         setModalShow(false);
//     }
//   };
    let total = 0
  return (
    <>
      {modalShow && (
        <div className={styles.modal}>
          <div className={styles.modal__heading}>
            <h2>cart {`(${cards.length})`}</h2>
            <span onClick={remove}>Remove all</span>
          </div>
          <div className={styles.modal__cards}>
            {cards.map((el, index) => {
                total += el.num * el.price
              return (
                <div key={index} className={styles.modal__card}>
                  <div className={styles.modal__card__img}>
                    <img src={`../../public/${el.image}`} />
                  </div>
                  <div className={styles.modal__card__text}>
                    <h2>{el.name}</h2>
                    <p>$ {el.price}</p>
                  </div>
                  <div className={styles.counter}>
                    <span onClick={() => handleDecrementModal(el.id)}>-</span>
                    <p>{el.num}</p>
                    <span onClick={() => handleIncrementModal(el.id)}>+</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.total}>
            <p>TOTAL</p>
            <span>$ {total}</span>
          </div>
          <Link to="/checkout">
            <button onClick={openModal}>checkout</button>
          </Link>
        </div>
      )}
      {loader && <div className={styles.loader}>
      <div class={styles.circleContainer}>
        <div class={styles.circleProgress}></div>
      </div>
    </div>}
      {!loader && <div>
        <Link style={{ textDecoration: "none" }} to="/">
          <span
            style={{ display: "block", width: "max-content" }}
            className={styles.goBack}
          >
            Go Back
          </span>
        </Link>
        <div className={styles.card__wrapper}>
          <div className={styles.card__img}>
            <img
              src={`../../../public/${data[0]?.image}`}
              alt="Product Image"
            />
          </div>
          <div className={styles.card__text}>
            <h4>NEW PRODUCT</h4>
            <h2>{data[0]?.name}</h2>
            <p>{data[0]?.description}</p>
            <h3>$ {data[0]?.price}</h3>
            <div className={styles.add}>
              <div className={styles.num}>
                <span className={styles.decrement} onClick={handleDecrement}>
                  -
                </span>
                <span>{num}</span>
                <span className={styles.increment} onClick={handleIncrement}>
                  +
                </span>
              </div>
              <button onClick={(e) => openModal(e)}>Add to cart</button>
            </div>
          </div>
        </div>
        <div className={styles.futured__wrapper}>
          <div className={styles.futured__text}>
            <h2>FEATURES</h2>
            <p>{data[0]?.features}</p>
          </div>
          <div className={styles.futured__box}>
            <h2>IN THE BOX</h2>
            <div className={styles.lists__wrapper}>
              {data[0]?.includes &&
                data[0]?.includes.map((el) => {
                  return (
                    <div className={styles.list}>
                      <span>{el.quantity}x</span>
                      <p>{el.item}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className={styles.galery}>
          <div className={styles.colum}>
            <img src={`../../../public/${data[0]?.gallery.first}`} />
            <img src={`../../../public/${data[0]?.gallery.second}`} />
          </div>
          <div className={styles.row}>
            <img src={`../../../public/${data[0]?.gallery.third}`} />
          </div>
        </div>
        <div className={styles.other}>
          <h2>YOU MAY AlLSO LIKE</h2>
          <div className={styles.other__cards}>
            {data[0]?.others &&
              data[0]?.others.map((el) => {
                return (
                  <div className={styles.card}>
                    <div className={styles.card__img}>
                      <img src={`../../../public/${el.image}`} />
                    </div>
                    <div className={styles.card__text}>
                      <h2>{el.name}</h2>
                      <Link to={`/product/${el.id}`}>
                        <button>See Product</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <Futured></Futured>
        <Bring> </Bring>
      </div>}
    </>
  );
}

export default More;
