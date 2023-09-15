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
          <Link to="/visit/seogyo" onClick={activeMenu}>
            SEOGYO
          </Link>
        </li>
        <li>
          <Link to="/visit/hannam" onClick={activeMenu}>
            HANNAM
          </Link>
        </li>
        <li>
          <Link to="/visit/jejuhanlim" onClick={activeMenu}>
            JEJU HANLIM
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default VisitSideMenu;
