import { Link, Route, Router, Routes } from "react-router-dom";
import "./common.css";
import Header from "./component/common/Header";
import Main from "./component/common/Main";

import CoffeeBeans from "./component/beans/CoffeeBeans";
import Visit from "./component/visit/Visit";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrap">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/beans" element={<CoffeeBeans />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
