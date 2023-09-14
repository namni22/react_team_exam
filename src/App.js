import { Link, Route, Router, Routes } from "react-router-dom";
import "./common.css";
import Header from "./component/common/Header";
import Main from "./component/common/Main";
import CoffeeBeans from "./component/beans/CoffeeBeans";
import Visit from "./component/visit/Visit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/beans" element={<CoffeeBeans />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
      <div className="content-wrap"></div>
    </div>
  );
}

export default App;
