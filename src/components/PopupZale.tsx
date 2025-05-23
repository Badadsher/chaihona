import React from "react";
import "./css/popup.css";
import { useState } from "react";
import "./css/popupzale.css";

interface PopupZaleProps {
  active: boolean;
  setActive: (open: boolean) => void;
}

const PopupZale: React.FC<PopupZaleProps> = ({ active, setActive }) => {
  const [number, setNumberValue] = useState("");
  const handleButtonClick = (action: string) => {
    if (action == "actionZale" && number != "") {
      fetch("http://localhost:8080/yalla/checker.php", {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputnumber: number,
          action: action,
        }),
      })
        .then((response) => response.text())
        .then((data) => {
          try {
            const jsonData = JSON.parse(data);
            console.log("Ответ от сервера:", jsonData);
          } catch (error) {
            console.error("Ошибка при разборе JSON:", error);
            console.log("Текст ответа:", data);
          }
        })
        .catch((error) => {
          console.error("Ошибка при отправке данных:", error);
        });
      alert("Заявка отправлена!");
      window.location.reload();
    } else {
      alert("Заполните все поля");
    }
  };

  return (
    <div className={active ? "popup active" : "popup"}>
      <div className="popupzale_window">
        <button
          onClick={() => {
            setActive(false);
          }}
        ></button>

        <div className="popupzale_window-top">
          <a>АРЕНДА ЗАЛА</a>
        </div>

        <div className="popupzale_window-inputs">
          <a>
            Банкеты, торжества, презентации <br />
            Банкетный зал для любого вашего мероприятия! <br /> Отдохните душой
            и телом в чайхоне ЯЛЛА! Ваше торжество пройдет в прекрасном
            интерьере с восточным гостеприимством и великолепной программой.
            <br />
            Лучше предложение ЮВАО Москвы: <br /> • От 2 500 руб. на гостя • От
            5 гостей • Максимальная скидка на все напитки меню - 50%
          </a>
        </div>

        <div className="popupzale_window-rent">
          <a>Оставьте свой номер</a>
          <input
            type="number"
            onChange={(e) => setNumberValue(e.target.value)}
          ></input>
        </div>
        <div className="popupzale_window-rentbtn">
          <button onClick={() => handleButtonClick("actionZale")}>
            ОТПРАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </div>
  );
};
export default PopupZale;
