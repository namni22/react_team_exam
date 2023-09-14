import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-wrap">
      <Link to="/" className="logo">
        VENUS
      </Link>
      <div className="navi">
        <ul>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/visit">VISIT</Link>
          </li>
          <li>
            <Link to="/beans">BEANS</Link>
          </li>
          <li>
            <Link to="/class">CLASS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
