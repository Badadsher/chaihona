import React from "react";
import "./css/popup.css";
import { useState } from "react";
import Close from "../assets/close.svg";
import "./css/popupcontact.css";

interface ContactsPopupProps {
  active: boolean;
  setActive: (open: boolean) => void;
}

const ContactsPopup: React.FC<ContactsPopupProps> = ({ active, setActive }) => {
  return (
    <div className={active ? "popup active" : "popup"}>
      <div className="popupcontact_window">
        <button
          onClick={() => {
            setActive(false);
          }}
        ></button>

        <div className="popupcontact_window-top">
          <a>Контакты</a>
        </div>

        <div className="popupcontact_window-inputs">
          <a>
            ул. Генерала Белова д. 18б: <span>+7 (903) 799 34 37</span>
          </a>
          <a>
            ул. Нагатинская д. 16: <span>+7 (968) 850 80 90</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactsPopup;
