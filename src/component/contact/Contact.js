import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-wrap">
      <div className="contact-title">VENUS</div>
      <div className="contact-content">
        <div className="contact-info">
          <ul>
            <li>
              TEL. <span>070-1212-0909</span>
            </li>
            <li>
              MAIL. <span>VENUS.COFFEE@VENUS.COM</span>
            </li>
            <li>
              ADDR. <span>7, Dangsan-ro 46ga-gil, Yeongdeungpo-gu, Seoul</span>
            </li>
          </ul>
          <span>
            Copyright © VENUS Coffee. 2023 All rights reserved. Site designed by
            Venus seoul.
          </span>
        </div>
        <div className="contact-form">
          <div className="contact-form-title">CONTACT</div>
          <div className="contact-form-content">
            <div className="contact-name">
              <label for="name">이름</label>
              <input type="text" name="name" id="name"></input>
            </div>
            <div className="contact-phone">
              <label for="phone">연락처</label>
              <input type="text" name="phone" id="phone"></input>
              <span>-</span>
              <input type="text" name="phone" id="phone"></input>
              <span>-</span>
              <input type="text" name="phone" id="phone"></input>
            </div>
            <div className="contact-question">
              <label for="question">내용</label>
              <textarea type="text" name="question" id="question"></textarea>
            </div>
            <button className="contact-btn">작성완료</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
