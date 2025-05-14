import React, { useState } from "react";
import ZakuskaData from "../../jsons/zakuska.json";
import Grenki from "../../menuList/restMenu/zakuska/chesnokgrenka.jpg";
import Kurut from "../../menuList/restMenu/zakuska/kurut.jpg";
import Suhari from "../../menuList/restMenu/zakuska/suhari.jpg";
import Arais from "../../menuList/restMenu/zakuska/arachis.jpg";
import Fistash from "../../menuList/restMenu/zakuska/fistash.jpeg";
import Cheaps from "../../menuList/restMenu/zakuska/chips.jpg";
import Order from "../../Order";

interface ZakuskaProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}
interface ZakuskaItem {
  id: number;
  name: string;
  weight: string;
  price: number;
}
const Zakuska: React.FC<ZakuskaProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: ZakuskaData.length }, () => false)
  );

  const imageArray = [Grenki, Kurut, Suhari, Arais, Fistash, Cheaps];

  const handleButtonClick = (index: number, item: ZakuskaItem) => {
    const newButtonState = [...buttonState];
    newButtonState[index] = !newButtonState[index];
    setButtonState(newButtonState);
    onData({ id: item.id, title: item.name, price: item.price });
  };

  const switcherFunc = () => {
    switcher("zakuska");
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={() => switcherFunc()}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {ZakuskaData.map((item, index) => (
          <div key={index} className="restarauntmenu-list_objectcold">
            <img src={imageArray[index]}></img>
            <a>{item.name}</a>
            <p className="restarauntmenu-list_objectweight">{item.weight}</p>
            <p>{item.price}</p>
            <button onClick={() => handleButtonClick(index, item)}>
              {buttonState[index] ? "В корзине" : "Добавить в корзину"}
            </button>
          </div>
        ))}
      </div>

      <div className="menu-container_mobile">
        {ZakuskaData.slice(0, 2).map((item, index) => (
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
        {ZakuskaData.slice(2, 4).map((item, index) => (
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
        {ZakuskaData.slice(4, 6).map((item, index) => (
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

export default Zakuska;
