import "./header.css";

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
            <a>VISIT</a>
          </li>
          <li>
            <a>BEANS</a>
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
