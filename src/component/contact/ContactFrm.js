import "./contactFrm.css";
import { useState } from "react";
const ContactFrm = (props) => {
  const contactAdd = props.contactAdd;
  let no = props.no;
  no++;
  const [contact, setContact] = useState([]);
  const result = () => {
    const name = document.querySelector("[name=addName]").value;
    const phone1 = document.querySelector("[name=addPhone1]").value;
    const phone2 = document.querySelector("[name=addPhone2]").value;
    const phone3 = document.querySelector("[name=addPhone3]").value;
    const phone = phone1 + phone2 + phone3;
    const addr = document.querySelector("[name=question").value;
    const contact = {
      no: no,
      name: name,
      phone: phone,
      addr: addr,
    };
    contactAdd(contact);
  };
  return (
    <div className="contact-form">
      <div className="contact-form-title">CONTACT</div>
      <div className="contact-form-content">
        <div className="contact-name">
          <label htmlFor="name">이름</label>
          <input type="text" name="addName" id="name"></input>
        </div>
        <div className="contact-phone">
          <label htmlFor="phone">연락처</label>
          <input type="text" name="addPhone1" id="phone"></input>
          <span>-</span>
          <input type="text" name="addPhone2" id="phone"></input>
          <span>-</span>
          <input type="text" name="addPhone3" id="phone"></input>
        </div>
        <div className="contact-question">
          <label htmlFor="question">내용</label>
          <textarea type="text" name="question" id="question"></textarea>
        </div>
        <button className="contact-btn" onClick={result}>
          작성완료
        </button>
      </div>
    </div>
  );
};
export default ContactFrm;
