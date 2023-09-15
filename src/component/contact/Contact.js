import ContactFrm from "./ContactFrm";
import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [contact, setContact] = useState([]);
  const no = 0;
  {
    /*
    no
    name
    phone
    question
  */
  }
  const contactAdd = (props) => {
    contact.push(props);
  };

  const contactFrm = () => {};
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
        <ContactFrm contactAdd={contactAdd} no={no} />
      </div>
    </div>
  );
};

export default Contact;
