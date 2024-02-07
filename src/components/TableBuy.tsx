import React, { useState } from "react";
import "./css/tablecss.css";

const TableBuy: React.FC = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [date, setData] = useState("");
  const [guest, setGuest] = useState("");
  const [selectedValue, setSelectedValue] = useState("someOption");
  let restarauntName: string;
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const handleButtonClick = (action: string) => {
    if (
      action == "actionTable" &&
      number != "" &&
      name != "" &&
      date != "" &&
      guest != ""
    ) {
      if (selectedValue == "someOption") {
        restarauntName = "ул. Генерала Белова д. 18б";
      } else {
        restarauntName = "ул. Нагатинская д. 16";
      }

      // Отправка данных на сервер
      fetch("http://localhost:8080/yalla/checker.php", {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputnumber: number,
          inputname: name,
          inputdate: date,
          inputguest: guest,
          inputrestaurant: restarauntName,
          action: action,
        }),
      })
        .then((response) => response.text()) // Используем text() вместо json()
        .then((data) => {
          try {
            // Попытаемся разобрать данные как JSON
            const jsonData = JSON.parse(data);
            console.log("Ответ от сервера:", jsonData);
          } catch (error) {
            // Если разбор JSON не удался, выведем данные как текст
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
    <div className="tablebuy" id="tablebuyicon">
      <div className="tablebuy-name">
        <h1>БРОНЬ СТОЛИКА</h1>
      </div>

      <div className="tablebuy-inputwindow">
        <div className="tablebuy-inputwindow_view">
          <div className="tablebuy-inputwindow_view-object view-object_first">
            <a>Имя</a>
            <input onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div className="tablebuy-inputwindow_view-object">
            <a>Телефон</a>
            <input onChange={(e) => setNumber(e.target.value)}></input>
          </div>
          <div className="tablebuy-inputwindow_view-object">
            <a>Дата и время</a>
            <input onChange={(e) => setData(e.target.value)}></input>
          </div>
          <div className="tablebuy-inputwindow_view-object">
            <a>Количество гостей</a>
            <input onChange={(e) => setGuest(e.target.value)}></input>
          </div>
          <div className="tablebuy-inputwindow_view-object">
            <a>Выбирите ресторан</a>
            <select value={selectedValue} onChange={handleChange}>
              <option value="someOption">ул. Генерала Белова д. 18б</option>
              <option value="otherOption">ул. Нагатинская д. 16</option>
            </select>
          </div>
        </div>
      </div>
      <div className="tablebuy-button">
        <button onClick={() => handleButtonClick("actionTable")}>
          ОТПРАВИТЬ
        </button>
      </div>
    </div>
  );
};

export default TableBuy;
