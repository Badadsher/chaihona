import React from "react";
import "./css/popup.css";
import { useState } from "react";

import "./css/popup.css";
import Order from "./Order";

interface PopupProps {
  active: boolean;
  setActive: (open: boolean) => void;
  selectedProducts: Order[];
}

const PopupMarket: React.FC<PopupProps> = ({
  active,
  setActive,
  selectedProducts,
}) => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [geo, setGeo] = useState("");
  const handleButtonClick = (action: string) => {
    // var formattedOrders = selectedProducts.map(function (order) {
    //   return {
    //     title: order.title,
    //     price: order.price,
    //   };
    // });

    var formattedOrders = selectedProducts.map(
      (product) => `${product.title}-ЦЕНА ${product.price}Р`
    );
    var dataToSend = formattedOrders.join(",");
    let price = selectedProducts.reduce((total, item) => total + item.price, 0);
    if (selectedProducts != null && number != "" && geo != "" && name != "") {
      // Отправка данных на сервер
      fetch("http://localhost:8080/yalla/checker.php", {
        mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          numbervalue: number,
          action: action,
          order: dataToSend,
          price: price,
          name: name,
          geo: geo,
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
    <div className={active ? "popup active" : "popup"}>
      <div className="popup_window">
        <button
          onClick={() => {
            setActive(false);
          }}
        ></button>

        <div className="popup_window-top">
          <a>КОРЗИНА</a>
        </div>

        <div className="popup_windowzakaz">
          <div>
            {selectedProducts.map((item) => (
              <div className="order">
                <a>{item.title}-</a>
                <p>{item.price}Р</p>
              </div>
            ))}
          </div>
          <div>
            <a className="sumPrice">
              ИТОГОВАЯ ЦЕНА:
              {selectedProducts.reduce((total, item) => total + item.price, 0)}Р
            </a>
          </div>
          <div className="valueWaiter">
            <input
              placeholder="ТЕЛЕФОН"
              onChange={(e) => setNumber(e.target.value)}
            ></input>{" "}
            <input
              placeholder="ИМЯ"
              onChange={(e) => setName(e.target.value)}
            ></input>{" "}
            <input
              placeholder="АДРЕС"
              onChange={(e) => setGeo(e.target.value)}
            ></input>{" "}
            <button onClick={() => handleButtonClick("zakaz")}>ЗАКАЗАТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopupMarket;
