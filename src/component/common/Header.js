import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrap">
      <div className="logo">VENUS</div>
      <div className="navi">
        <ul>
          <li>
            <a>ABOUT</a>
          </li>
          <li>
            <Link to="/visit">VISIT</Link>
          </li>
          <li>
            <Link to="/beans">BEANS</Link>
          </li>
          <li>
            <a>CLASS</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
