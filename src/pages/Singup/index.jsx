import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./index.css";

function Singup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const repasswordRef = useRef("");

  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  function validate() {
    const username = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const repassword = repasswordRef.current.value.trim();

    if (!username.length) {
      nameRef.current.focus();
      nameRef.current.value = "";
      return false;
    }

    if (!email.length) {
      emailRef.current.focus();
      emailRef.current.value = "";
      return false;
    }

    if (!validateEmail(email)) {
      emailRef.current.focus();
      emailRef.current.value = "";
      return false;
    }

    if (!password.length) {
      passwordRef.current.focus();
      passwordRef.current.value = "";
      return false;
    }

    if (!repassword.length) {
      repasswordRef.current.focus();
      repasswordRef.current.value = "";
      return false;
    }

    if (password !== repassword) {
      passwordRef.current.focus();
      repasswordRef.current.value = "";
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
        username: `${nameRef.current.value}`,
        email: `${emailRef.current.value}`,
        password: `${passwordRef.current.value}`,
      };

      fetch(`${"https://auth-rg69.onrender.com/api/auth/signup"}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
            navigate("/singin");
        })
        .catch((error) => {
          console.error("Ma'lumotlarni olishda xatolik yuz berdi:", error);
        });
    }
  }

  return (
    <div className="bg-color">
      <div className="container-register">
        <div className="form-wrapper">
          <h3>Sign Up</h3>
          <form className="forms" onSubmit={hendleSubmit}>
            <input ref={nameRef} type="text" placeholder="Usename" />
            <input ref={emailRef} type="email" placeholder="Email address" />
            <input ref={passwordRef} type="Password" placeholder="Password" />
            <input
              ref={repasswordRef}
              type="Password"
              placeholder="Repeat password"
            />
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Create an account"}
            </button>
            <p>
              Already have an account? <Link className="link" to="/singin">Singin</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Singup;
