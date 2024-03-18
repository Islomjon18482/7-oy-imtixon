import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

function Singin() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  function validate() {
    if (!usernameRef.current.value.trim().length) {
      usernameRef.current.focus();
      usernameRef.current.value = "";
      return false;
    }
    if (!passwordRef.current.value.trim().length) {
      passwordRef.current.focus();
      passwordRef.current.value = "";
      return false;
    }
    return true;
  }

  function hendleSubmit(e) {
    e.preventDefault();
    const isValidate = validate();

    if (isValidate) {
      setIsLoading(true);
      let data = {
        username: `${usernameRef.current.value}`,
        email: "",
        password: `${passwordRef.current.value}`,
      };
      fetch(`${"https://auth-rg69.onrender.com/api/auth/signin"}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
            if(data.messaga == "User Not found."){
                navigate("/singup")
            }else{
                localStorage.setItem("token", data.accessToken);
                localStorage.setItem("user", JSON.stringify(data));
                navigate("/");
            }
        })
        .catch((error) => {
          alert("Bunday foydalanuvchi mavjud emas");
        });
    }
  }

  return (
    <div className="bgcontainer">
      <div className="containerLogin">
        <div className="formWrapper">
          <h3>Login</h3>
          <form className="form__wrap">
            <input ref={usernameRef} type="text" placeholder="Username" />
            <input ref={passwordRef} type="password" placeholder="Password" />
            <button onClick={hendleSubmit} disabled={isLoading}>
              {isLoading ? "Loading..." : "Login to your account"}
            </button>
            <p>
              Already have an account? <Link to="/singup">Singup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singin;
