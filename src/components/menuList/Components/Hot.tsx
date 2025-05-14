import React, { useState } from "react";
import HotData from "../../jsons/hot.json";

import Baklazan from "../../menuList/restMenu/hot/baklazanhrust.jpg";
import VegetablesGril from "../../menuList/restMenu/hot/vegetablesgril.png";
import VegetablesCheese from "../../menuList/restMenu/hot/vegetablescheese.png";
import MashCheese from "../../menuList/restMenu/hot/gribcheese.png";
import Kamamber from "../../menuList/restMenu/hot/kamamber.jpg";
import ChickenStrips from "../../menuList/restMenu/hot/chickenstrips.png";
import Nuggets from "../../menuList/restMenu/hot/naggets.png";
import KutabZelen from "../../menuList/restMenu/hot/kutabszelen.jpg";
import KutabCheese from "../../menuList/restMenu/hot/kutabcheese.png";
import KutabMeat from "../../menuList/restMenu/hot/kutabmeat.png";
import Order from "../../Order";

interface HotProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}

interface HotItem {
  id: number;
  name: string;
  weight: string;
  price: number;
}

const Hot: React.FC<HotProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: HotData.length }, () => false)
  );

  const imageArray = [
    Baklazan,
    VegetablesGril,
    VegetablesCheese,
    MashCheese,
    Kamamber,
    ChickenStrips,
    Nuggets,
    KutabZelen,
    KutabCheese,
    KutabMeat,
  ];

  // Функция для обработки нажатия кнопки
  const handleButtonClick = (index: number, item: HotItem) => {
    // Создаем копию массива состояний кнопок
    const newButtonState = [...buttonState];
    // Изменяем состояние конкретной кнопки по индексу
    newButtonState[index] = !newButtonState[index];
    // Устанавливаем новое состояние
    setButtonState(newButtonState);

    onData({ id: item.id, title: item.name, price: item.price });
  };

  const switcherFunc = () => {
    switcher("hot");
    // setActive(!active);
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={() => switcherFunc()}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {HotData.map((item, index) => (
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

      <div className="menu-container_mobile">
        {HotData.slice(0, 2).map((item) => (
          <div key={item.id} className="restarauntmenu-list_objectcold">
            <img src={imageArray[item.id - 1]}></img>
            <a>{item.name}</a>
            <p className="restarauntmenu-list_objectweight">{item.weight}</p>
            <p>{item.price}Р</p>
            <button onClick={() => handleButtonClick(item.id - 1, item)}>
              {buttonState[item.id - 1] ? "В корзине" : "Добавить в корзину"}
            </button>
          </div>
        ))}
      </div>
      <div className="menu-container_mobile">
        {HotData.slice(2, 4).map((item) => (
          <div key={item.id} className="restarauntmenu-list_objectcold">
            <img src={imageArray[item.id - 1]}></img>
            <a>{item.name}</a>
            <p className="restarauntmenu-list_objectweight">{item.weight}</p>
            <p>{item.price}Р</p>
            <button onClick={() => handleButtonClick(item.id - 1, item)}>
              {buttonState[item.id - 1] ? "В корзине" : "Добавить в корзину"}
            </button>
          </div>
        ))}
      </div>
      <div className="menu-container_mobile">
        {HotData.slice(4, 6).map((item) => (
          <div key={item.id} className="restarauntmenu-list_objectcold">
            <img src={imageArray[item.id - 1]}></img>
            <a>{item.name}</a>
            <p className="restarauntmenu-list_objectweight">{item.weight}</p>
            <p>{item.price}Р</p>
            <button onClick={() => handleButtonClick(item.id - 1, item)}>
              {buttonState[item.id - 1] ? "В корзине" : "Добавить в корзину"}
            </button>
          </div>
        ))}
      </div>
      <div className="menu-container_mobile">
        {HotData.slice(6, 8).map((item) => (
          <div key={item.id} className="restarauntmenu-list_objectcold">
            <img src={imageArray[item.id - 1]}></img>
            <a>{item.name}</a>
            <p className="restarauntmenu-list_objectweight">{item.weight}</p>
            <p>{item.price}Р</p>
            <button onClick={() => handleButtonClick(item.id - 1, item)}>
              {buttonState[item.id - 1] ? "В корзине" : "Добавить в корзину"}
            </button>
          </div>
        ))}
      </div>
      <div className="menu-container_mobile">
        {HotData.slice(8, 10).map((item) => (
          <div key={item.id} className="restarauntmenu-list_objectcold">
            <img src={imageArray[item.id - 1]}></img>
            <a>{item.name}</a>
            <p className="restarauntmenu-list_objectweight">{item.weight}</p>
            <p>{item.price}Р</p>
            <button onClick={() => handleButtonClick(item.id - 1, item)}>
              {buttonState[item.id - 1] ? "В корзине" : "Добавить в корзину"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hot;
