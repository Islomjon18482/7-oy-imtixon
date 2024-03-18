import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import Productcard from "../../components/Productcard";
import Futured from "../../components/Future";
import Bring from "../../components/Bring";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Allpages() {
  const { page } = useParams();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false)

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
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3004/${page}`);
        setLoader(false)
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [page]);

  return (
    <>
    {loader && <div className={styles.loader}>
      <div class={styles.circleContainer}>
        <div class={styles.circleProgress}></div>
      </div>
    </div>}
      {!loader && <div>
        <div className={styles.heading}>
          <h2>{page}</h2>
        </div>
        {data.length > 0 &&
          data.map((el, index) => (
            <Productcard
              key={index}
              status={(index + 1) % 2 == 0 ? "right" : "left"}
              data={el}
            />
          ))}
        <Futured />
        <Bring />
      </div>}
    </>
  );
}

export default Allpages;
