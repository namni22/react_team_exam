import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userId = "naminworld@naver.com";
  const userPw = "12345";
  let [id, setId] = useState("");
  let [pw, setPw] = useState("");
  const [button, setButton] = useState(true);
  function changeButton() {
    id.includes("@") && pw.length >= 4 ? setButton(false) : setButton(true);
  }
  const goToMain = () => {
    navigate("/about");
  };
  return (
    <div className="contact-wrap">
      <div className="contact-title">VENUS</div>
      <div className="contact-content">
        <div className="contact-form">
          <div className="contact-form-title">Login</div>
          <div className="contact-form-content">
            <div className="contact-name">
              <label htmlFor="id">아이디</label>
              <input
                required
                placeholder="아이디를 입력해주세요"
                type="text"
                name="id"
                id="id"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                onKeyUp={changeButton}
              />
            </div>
            <div className="contact-name">
              <label htmlFor="pw">비밀번호</label>
              <input
                required
                placeholder="비밀번호를 입력해주세요"
                type="password"
                name="pw"
                id="pw"
                onChange={(e) => {
                  setPw(e.target.value);
                }}
                onKeyUp={changeButton}
              ></input>
            </div>
            <button
              type="button"
              className="contact-btn"
              disabled={button}
              onClick={(e) => {
                if (userId == id) {
                  if (userPw == pw) {
                    alert("로그인완료");
                    e.stopPropagation();
                    goToMain();
                  }
                } else {
                  alert("아이디 혹은 비밀번호가 일치하지 않습니다.");
                }
              }}
            >
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
