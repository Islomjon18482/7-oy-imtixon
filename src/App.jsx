import "./App.css";
import { Routes, Route } from "react-router-dom";
import Loyaut from "./Loyaut/index.jsx";
import Home from "./pages/Home/Home.jsx";
import Allpages from "./pages/Allpages/index.jsx";
import More from "./pages/More/index.jsx";
import Checkout from "./pages/Checkout/index.jsx";
import Error from "./pages/Error/index.jsx"; 

function App() {

  return (
    <>
    
      <Routes>
        <Route
          path="/"
          element={
            <Loyaut>
              <Home></Home>
            </Loyaut>
          }
        ></Route>
        <Route
          path="/page/:page"
          element={
            <Loyaut>
              <Allpages></Allpages>
            </Loyaut>
          }
        ></Route>
        <Route
          path="/product/:id"
          element={
            <Loyaut>
              <More />
            </Loyaut>
          }
        ></Route>
        <Route
          path="/checkout"
          element={
            <Loyaut>
              <Checkout />
            </Loyaut>
          }
        ></Route>
        <Route path="*" element={<Error></Error>}>

        </Route>
      </Routes>
    </>
  );
}

export default App;
