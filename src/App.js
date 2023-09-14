import { Link, Route, Router, Routes } from "react-router-dom";
import "./common.css";
import Header from "./component/common/Header";
import Main from "./component/common/Main";
import CoffeeBeans from "./component/common/beans/CoffeeBeans";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/beans" element={<CoffeeBeans />} />
      </Routes>
      <div className="content-wrap"></div>
    </div>
  );
}

export default App;
