import { Link } from "react-router-dom";
import "./visitSideMenu.css";

const VisitSideMenu = () => {
  const activeMenu = (e) => {
    const menus = document.querySelectorAll(".visit-side-menu a");
    menus.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };
  return (
    <div className="visit-side-menu">
      <ul>
        <li>
          <Link to="YEONNAM" onClick={activeMenu}>
            YEONNAM /
          </Link>
        </li>
        <li>
          <Link to="MANGWON" onClick={activeMenu}>
            MANGWON /
          </Link>
        </li>
        <li>
          <Link to="JEJUHANLIM" onClick={activeMenu}>
            JEJU HANLIM /
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default VisitSideMenu;