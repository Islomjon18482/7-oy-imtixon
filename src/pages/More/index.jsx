import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import Futured from '../../components/Future';
import Bring from '../../components/Bring';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";


function More() {
    const [num, setNum] = useState(1);
    const {id} = useParams()
    const [data, setData] = useState([])

    const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    if (pathname !== '/') { 
      const timeout = setTimeout(scrollToTop, 100); 
      return () => clearTimeout(timeout);
    }
  }, [pathname]);


    useEffect(() => {
        fetch("http://localhost:3004/ALL")
            .then(res => res.json())
            .then(data => {
                data = data.filter((el)=>{
                    return el.id == id
                })
                setData(data)
                console.log(data)
            })
            .catch(err =>{
                console.log(err)
            })
    }, [id])

    const handleDecrement = () => {
        if (num > 1) {
            setNum(num - 1);
        }
    };

    const handleIncrement = () => {
        setNum(num + 1);
    };

    return (
        <div>
            <Link style={{textDecoration: "none"}} to="/">
             <p className={styles.goBack}>Go Back</p>
            </Link>
            <div className={styles.card__wrapper}>
                <div className={styles.card__img}>
                    
                    <img src={`../../../public/${data[0]?.image}`} alt="Product Image" />
                </div>
                <div className={styles.card__text}>
                    <h4>NEW PRODUCT</h4>
                    <h2>{data[0]?.name}</h2>
                    <p>
                    {data[0]?.description}
                    </p>
                    <h3>$ {data[0]?.price}</h3>
                    <div className={styles.add}>
                        <div className={styles.num}>
                            <span className={styles.decrement} onClick={handleDecrement}>-</span>
                            <span>{num}</span>
                            <span className={styles.increment} onClick={handleIncrement}>+</span>
                        </div>
                        <button>Add to cart</button>
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
                        {data[0]?.includes && data[0]?.includes.map((el)=>{
                            return <div className={styles.list}>
                            <span>{el.quantity}x</span>
                            <p>{el.item}</p>
                        </div>
                        })}
                    </div>
                </div>
            </div>
            <div className={styles.galery}>
                <div className={styles.colum}>
                    <img src={`../../../public/${data[0]?.gallery.first}`}/>
                    <img src={`../../../public/${data[0]?.gallery.second}`}/>
                </div>
                <div className={styles.row}>
                    <img src={`../../../public/${data[0]?.gallery.third}`}/>
                </div>
            </div>
            <div className={styles.other}>
                <h2>YOU MAY AlLSO LIKE</h2>
                <div className={styles.other__cards}>
                    {data[0]?.others && data[0]?.others.map((el) =>{
                        return <div className={styles.card}>
                        <div className={styles.card__img}>
                            <img src={`../../../public/${el.image}`}/>
                        </div>
                        <div className={styles.card__text}>
                            <h2>{el.name}</h2>
                            <Link to={`/product/${el.id}`}>
                             <button>See Product</button>
                            </Link>
                        </div>
                    </div>
                    })}
                </div>
            </div>
            <Futured></Futured>
            <Bring> </Bring>
        </div>
    );
}

export default More;
