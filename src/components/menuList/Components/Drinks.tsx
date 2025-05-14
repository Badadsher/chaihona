import React, { useState } from "react";
import DrinkData from "../../jsons/drink.json";

import Order from "../../Order";
import Coca from "../../menuList/restMenu/drinks/coca.jpg";
import Sprite from "../../menuList/restMenu/drinks/sprite.jpg";
import Fanta from "../../menuList/restMenu/drinks/fanta.png";
import Bon from "../../menuList/restMenu/drinks/bon.jpeg";
import Burn from "../../menuList/restMenu/drinks/burnjer.jpg";
import Rich from "../../menuList/restMenu/drinks/rich.png";
import Narzan from "../../menuList/restMenu/drinks/narzan.jpg";
import Borjomi from "../../menuList/restMenu/drinks/borjomi.jpg";
import Dobri from "../../menuList/restMenu/drinks/dobriy.jpg";
import Mors from "../../menuList/restMenu/drinks/mors.jpg";
import Sharbat from "../../menuList/restMenu/drinks/sharbat.jpg";
import PopupDrinks from "../../PopupDrinks";

interface DrinksProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}

interface DrinkItem {
  id: number;
  name: string;
  weight: string;
  price: number;
}

const Drinks: React.FC<DrinksProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: DrinkData.length }, () => false)
  );

  const [activePopupDrinks, setActivePopupDrinks] = useState(false);

  const imageArray = [
    Coca,
    Coca,
    Sprite,
    Sprite,
    Fanta,
    Fanta,
    Bon,
    Bon,
    Burn,
    Burn,
    Rich,
    Narzan,
    Borjomi,
    Dobri,
    Dobri,
    Mors,
    Mors,
    Sharbat,
    Sharbat,
  ];

  // Функция для обработки нажатия кнопки
  const handleButtonClick = (index: number, item: DrinkItem) => {
    // Создаем копию массива состояний кнопок
    const newButtonState = [...buttonState];
    // Изменяем состояние конкретной кнопки по индексу
    newButtonState[index] = !newButtonState[index];
    // Устанавливаем новое состояние
    setButtonState(newButtonState);

    onData({ id: item.id, title: item.name, price: item.price });
  };

  const switcherFunc = () => {
    switcher("drinks");
    // setActive(!active);
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={() => switcherFunc()}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {DrinkData.map((item, index) => (
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
        {DrinkData.slice(0, 2).map((item, index) => (
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
        {DrinkData.slice(2, 4).map((item, index) => (
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
        {DrinkData.slice(4, 6).map((item, index) => (
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
        {DrinkData.slice(6, 8).map((item, index) => (
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
        {DrinkData.slice(8, 10).map((item, index) => (
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
        {DrinkData.slice(10, 12).map((item, index) => (
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
        {DrinkData.slice(12, 14).map((item, index) => (
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
        {DrinkData.slice(14, 16).map((item, index) => (
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
        {DrinkData.slice(16, 18).map((item, index) => (
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

      <PopupDrinks
        active={activePopupDrinks}
        setActive={setActivePopupDrinks}
      ></PopupDrinks>
    </div>
  );
};

export default Drinks;
