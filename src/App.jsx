import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Loyaut from "./Loyaut/index.jsx";
import Home from "./pages/Home/Home.jsx";
import Allpages from "./pages/Allpages/index.jsx";
import More from "./pages/More/index.jsx";
import Checkout from "./pages/Checkout/index.jsx";
import Error from "./pages/Error/index.jsx";
import Singup from "./pages/Singup/index.jsx";
import Singin from "./pages/Singin/index.jsx";

function App() {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if(!token){
      navigate("/singin")
    }
  }, []);

  function ProtectedRouter({ children, isAuthenication }) {
    if (!isAuthenication) {
      navigate("/singin");
      return null;
    }
    return children;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouter isAuthenication={token ? true : false}>
              <Loyaut>
                <Home />
              </Loyaut>
            </ProtectedRouter>
          }
        />
        <Route
          path="/page/:page"
          element={
            <ProtectedRouter isAuthenication={token ? true : false}>
              <Loyaut>
                <Allpages />
              </Loyaut>
            </ProtectedRouter>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRouter isAuthenication={token ? true : false}>
              <Loyaut>
                <More />
              </Loyaut>
            </ProtectedRouter>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRouter isAuthenication={token ? true : false}>
              <Loyaut>
                <Checkout />
              </Loyaut>
            </ProtectedRouter>
          }
        />
        <Route path="*" element={<Error />} />
        <Route path="/singup" element={<Singup />} />
        <Route path="/singin" element={<Singin />} />
      </Routes>
    </>
  );
}

export default App;
