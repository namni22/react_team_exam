import "./join.css";
import { useState, useCallback } from "react";

const Join = () => {
  //유효성검사
  const joinUserId = (userId) => {
    return userId
      .toLowerCase()
      .match(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
  };
  const joinPw = (password) => {
    return password
      .toLowerCase()
      .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{5,25}$/);
  };
  const joinName = (manName) => {
    return manName.toLowerCase().match(/^[가-힣].{1,4}$/);
  };
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [pwRe, setPwRe] = useState("");
  const [manName, setManName] = useState("");

  const [userIdMsg, setUserIdMsg] = useState("");
  const [userPwMsg, setUserPwMsg] = useState("");
  const [pwReMsg, setPwReMsg] = useState("");
  const [manNameMsg, setManNameMsg] = useState("");

  //아이디
  const onChangeUserId = useCallback(async (e) => {
    const currUserId = e.target.value;
    setUserId(currUserId);
    if (!joinUserId(currUserId)) {
      setUserIdMsg(
        <span className="joinError">이메일 형식으로 입력해주세요</span>
      );
    } else {
      setUserIdMsg(
        <span className="joinsussess">사용가능한 아이디입니다.</span>
      );
    }
  });
  //비밀번호
  const onChangeUserPw = useCallback(async (e) => {
    const currPw = e.target.value;
    setPassword(currPw);
    if (!joinPw(currPw)) {
      setUserPwMsg(
        <span className="joinError">
          영문, 숫자, 특수기호 조합으로 5자리 이상 입력해주세요.
        </span>
      );
    } else {
      setUserPwMsg(
        <span className="joinsussess">사용가능한 비밀번호입니다.</span>
      );
    }
  }, []);
  const onChangePwRe = useCallback(
    (e) => {
      const currPwRe = e.target.value;
      setPwRe(currPwRe);
      if (currPwRe !== password) {
        setPwReMsg(
          <span className="joinError">비밀번호가 일치하지 않습니다.</span>
        );
      } else {
        setPwReMsg(<span className="joinsussess">비밀번호가 일치합니다</span>);
      }
    },
    [password]
  );

  return (
    <div className="contact-wrap">
      <div className="contact-title">VENUS</div>

      <div className="contact-form">
        <div className="contact-form-title">Join</div>
        <form>
          <div className="contact-form-content">
            <div className="contact-name">
              <label htmlFor="userId">아이디</label>
              <input
                required
                type="text"
                name="userId"
                id="userId"
                onChange={onChangeUserId}
              ></input>
              <p className="join-msg">{userIdMsg}</p>
            </div>
            <div className="contact-name">
              <label htmlFor="name">비밀번호</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                onChange={onChangeUserPw}
              ></input>
              <p className="join-msg">{userPwMsg}</p>
            </div>
            <div className="contact-name">
              <label htmlFor="name">비밀번호 확인</label>
              <input
                required
                type="text"
                name="name"
                id="name"
                onChange={onChangePwRe}
              ></input>
              <p className="join-msg">{pwReMsg}</p>
            </div>
            <div className="contact-name">
              <label htmlFor="name">이름</label>
              <input type="text" name="name" id="name"></input>
            </div>
            <div className="contact-phone">
              <label htmlFor="phone">연락처</label>
              <input type="text" name="phone" id="phone"></input>
              <span>-</span>
              <input type="text" name="phone" id="phone"></input>
              <span>-</span>
              <input type="text" name="phone" id="phone"></input>
            </div>
            <button type="submit" className="contact-btn">
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
