import React, { useState } from "react";
import HotFoodData from "../jsons/hotfood.json";

import Plov from "../menuList/restMenu/hotfood/plov.jpg";
import Manti from "../menuList/restMenu/hotfood/manti.jpg";
import JizBaran from "../menuList/restMenu/hotfood/jizbaran.jpg";
import KazanKabob from "../menuList/restMenu/hotfood/kazankabob.jpg";
import Kaurma from "../menuList/restMenu/hotfood/kaurmalagman.jpg";
import CuchvaraDungan from "../menuList/restMenu/hotfood/ChuchvaraDagman.jpg";
import Dolma from "../menuList/restMenu/hotfood/dolma.jpg";
import Vaguri from "../menuList/restMenu/hotfood/vaguri.jpg";
import JizzUygur from "../menuList/restMenu/hotfood/uygurjiz.jpg";
import SpagettiBoloneze from "../menuList/restMenu/hotfood/spagettiboloneze.jpg";
import Pene from "../menuList/restMenu/hotfood/Penne.jpg";
import Souses from "../menuList/restMenu/fish/souses.png";
import Order from "../Order";

interface HotFoodProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}

const HotFood: React.FC<HotFoodProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: HotFoodData.length }, () => false)
  );

  const imageArray = [
    Plov,
    Manti,
    JizBaran,
    KazanKabob,
    Kaurma,
    CuchvaraDungan,
    Dolma,
    Vaguri,
    JizzUygur,
    SpagettiBoloneze,
    Pene,
    Souses,
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
    switcher("hotfood");
    // setActive(!active);
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={() => switcherFunc()}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {HotFoodData.map((item, index) => (
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

export default HotFood;
