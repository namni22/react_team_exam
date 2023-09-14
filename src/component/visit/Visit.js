import VisitSideMenu from "./VisitSideMenu";
import { Route, Routes } from "react-router-dom";
import VisitYeonnam from "./VisitYeonnam";
import VisitMangwon from "./VisitMangwon";
import VisitJejuHanlim from "./VisitJejuHanlim";

const Visit = () => {
  return (
    <div className="visit-all-wrap">
      <div className="visit-content-wrap">
        <VisitSideMenu />
        <div className="visit-content">
          <Routes>
            <Route path="YEONNAM" element={<VisitYeonnam />}></Route>
            <Route path="MANGWON" element={<VisitMangwon />}></Route>
            <Route path="JEJUHANLIM" element={<VisitJejuHanlim />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Visit;
