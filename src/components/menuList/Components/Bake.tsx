import React, { useState } from "react";
import BakeData from "../../jsons/bake.json";

import Megrelski from "../../menuList/restMenu/bake/hachapurimegrelski.jpg";
import Adzar from "../../menuList/restMenu/bake/ajarskiHachapri.jpg";
import Somsa from "../../menuList/restMenu/bake/somsa.jpg";
import Culcha from "../../menuList/restMenu/bake/nonculcha.png";

import Order from "../../Order";

interface BakeProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}

interface BakeItem {
  id: number;
  name: string;
  weight: string;
  price: number;
}

const Bake: React.FC<BakeProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: BakeData.length }, () => false)
  );

  const imageArray = [Megrelski, Adzar, Somsa, Culcha];

  const handleButtonClick = (index: number, item: BakeItem) => {
    const newButtonState = [...buttonState];
    newButtonState[index] = !newButtonState[index];
    setButtonState(newButtonState);

    onData({ id: item.id, title: item.name, price: item.price });
  };

  const switcherFunc = () => {
    switcher("bake");
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={() => switcherFunc()}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {BakeData.map((item, index) => (
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
        {BakeData.slice(0, 2).map((item, index) => (
          <div key={index} className="restarauntmenu-list_objectcold">
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
        {BakeData.slice(2, 4).map((item, index) => (
          <div key={index} className="restarauntmenu-list_objectcold">
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

export default Bake;
