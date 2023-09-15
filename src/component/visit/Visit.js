import VisitSideMenu from "./VisitSideMenu";
import { Route, Routes } from "react-router-dom";
import VisitJejuHanlim from "./VisitJejuHanlim";
import VisitSeoGyo from "./VisitSeoGyo";
import VisitHannam from "./VisitHannam";
import "./visit.css";
import VisitMain from "./VisitMain";

const Visit = () => {
  return (
    <div className="visit-all-wrap">
      <div className="visit-content-wrap">
        <VisitSideMenu />
        <Routes>
          <Route path="seogyo" element={<VisitSeoGyo />}></Route>
          <Route path="hannam" element={<VisitHannam />}></Route>
          <Route path="jejuhanlim" element={<VisitJejuHanlim />}></Route>
          <Route path="*" element={<VisitMain />}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Visit;
