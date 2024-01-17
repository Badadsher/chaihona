import React from "react";
import "./css/popup.css";
import { useState } from "react";
import Close from "../assets/close.svg";
import popupzale from "./css/popupzale.css";

interface PopupZaleProps {
  active: boolean;
  setActive: (open: boolean) => void;
}

const PopupZale: React.FC<PopupZaleProps> = ({ active, setActive }) => {
  return (
    <div className={active ? "popup active" : "popup"}>
      <div className="popup_window">
        <button
          onClick={() => {
            setActive(false);
          }}
        ></button>

        <div className="popup_window-top">
          <a>АРЕНДА ЗАЛА</a>
        </div>

        <div className="popup_window-inputs">
          <a>
            Банкеты, торжества, презентации Банкетный зал для любого вашего
            мероприятия! Отдохните душой и телом в чайхоне ЯЛЛА! Ваше торжество
            пройдет в прекрасном интерьере с восточным гостеприимством и
            великолепной программой. Лучше предложение ЮВАО Москвы: • От 2 500
            руб. на гостя • От 5 гостей • Максимальная скидка на все напитки
            меню - 50%
          </a>
        </div>
      </div>
    </div>
  );
};
export default PopupZale;
