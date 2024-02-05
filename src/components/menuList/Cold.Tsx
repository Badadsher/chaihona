import React, { useState } from "react";
import ColdData from "../jsons/cold.json";

import "./menuha.css";
import CheeseAssorti from "./restMenu/cold/cheese.jpg";
import FishAssorti from "./restMenu/cold/assortifish.jpg";
import MeetAssorti from "./restMenu/cold/meet.jpg";
import VegetableGryadka from "./restMenu/cold/vegetablegryadk.jpg";
import FruitNarezka from "./restMenu/cold/fruit.jpg";
import KrudoTunec from "./restMenu/cold/tunec.jpg";
import TongueCow from "./restMenu/cold/cowtongue.jpg";
import Kazi from "./restMenu/cold/horse.jpg";
import VegetableNarezka from "./restMenu/cold/vegetablenarezka.jpg";
import Seledka from "./restMenu/cold/seledkapotato.jpg";
import Chakka from "./restMenu/cold/chakka.jpg";
import Mozarella from "./restMenu/cold/tomatoemozarella.jpg";
import Eggplant from "./restMenu/cold/eggplant.jpg";
import Solenya from "./restMenu/cold/solenya.jpg";
import Buratta from "./restMenu/cold/buratta.jpg";
import Brinza from "./restMenu/cold/brinza.jpg";
import Maslina from "./restMenu/cold/maslina.jpg";
import TartarLosos from "./restMenu/cold/tartaravokado.jpg";
import TartarTunec from "./restMenu/cold/tartartunetc.jpg";
import TartarCow from "./restMenu/cold/tartarcow.jpg";
import Order from "../Order";

interface ColdProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}

const Cold: React.FC<ColdProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: ColdData.length }, () => false)
  );

  const imageArray = [
    FishAssorti,
    CheeseAssorti,
    MeetAssorti,
    VegetableGryadka,
    FruitNarezka,
    KrudoTunec,
    TongueCow,
    Kazi,
    VegetableNarezka,
    Seledka,
    Chakka,
    Mozarella,
    Eggplant,
    Solenya,
    Buratta,
    Brinza,
    Maslina,
    TartarLosos,
    TartarTunec,
    TartarCow,
  ];

  // Функция для обработки нажатия кнопки
  const handleButtonClick = (index: number, item: any) => {
    // Создаем копию массива состояний кнопок
    const newButtonState = [...buttonState];
    // Изменяем состояние конкретной кнопки по индексу
    newButtonState[index] = !newButtonState[index];
    // Устанавливаем новое состояние
    setButtonState(newButtonState);

    onData({ id: item.id, title: item.name, price: item.price });
  };

  const switcherFunc = () => {
    switcher("cold");
    // setActive(!active);
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={() => switcherFunc()}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {ColdData.map((item, index) => (
          <div key={index} className="restarauntmenu-list_objectcold">
            <img src={imageArray[index]}></img>
            <a>{item.name}</a>
            <p className="restarauntmenu-list_objectweight">{item.weight}</p>
            <p>{item.price}Р</p>
            <button onClick={() => handleButtonClick(index, item)}>
              {buttonState[index] ? "В корзине" : "Добавить в корзину"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cold;
