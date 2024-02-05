import React from "react";
import "./css/popup.css";
import { useState } from "react";
import Close from "../assets/close.svg";
import "./css/popup.css";

interface PopupProps {
  active: boolean;
  setActive: (open: boolean) => void;
}

const Popup: React.FC<PopupProps> = ({ active, setActive }) => {
  return (
    <div className={active ? "popup active" : "popup"}>
      <div className="popup_window">
        <button
          onClick={() => {
            setActive(false);
          }}
        ></button>

        <div className="popup_window-top">
          <a>Бронирование столика</a>
        </div>

        <div className="popup_window-inputs">
          <div className="popup_window-inputs-object input-name">
            <a>Имя</a>
            <input></input>
          </div>
          <div className="popup_window-inputs-object input-number">
            <a>Телефон</a>
            <input></input>
          </div>
          <div className="popup_window-inputs-object input-date">
            <a>Дата и время</a>
            <input></input>
          </div>
          <div className="popup_window-inputs-object input-amount">
            <a>Количество гостей</a>
            <input></input>
          </div>
          <div className="popup_window-inputs-object input-rest">
            <a>Выбирите ресторан</a>
            <select>
              <option value="someOption">ул. Генерала Белова д. 18б</option>
              <option value="otherOption">ул. Нагатинская д. 16</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Popup;
