import React from "react";
import "./css/popup.css";
import { useState } from "react";
import Close from "../assets/close.svg";
import popupcontact from "./css/popupcontact.css";

interface ContactsPopupProps {
  active: boolean;
  setActive: (open: boolean) => void;
}

const ContactsPopup: React.FC<ContactsPopupProps> = ({ active, setActive }) => {
  return (
    <div className={active ? "popup active" : "popup"}>
      <div className="popup_window">
        <button
          onClick={() => {
            setActive(false);
          }}
        ></button>

        <div className="popup_window-top">
          <a>Контакты</a>
        </div>

        <div className="popup_window-inputs">
          <a>ул. Генерала Белова д. 18б +7 (903) 799 34 37</a>
          <a>ул. Нагатинская д. 16 +7 (968) 850 80 90</a>
        </div>
      </div>
    </div>
  );
};
export default ContactsPopup;
