import React, { useState } from "react";
import LulaData from "../jsons/lula.json";

import LulaTelyat from "../menuList/restMenu/lula/lulatelyat.jpg";
import SashlikChaihona from "../menuList/restMenu/lula/ShashlikChaihona.jpg";
import UchPanza from "../menuList/restMenu/lula/ShashlikUchPanza.jpg";
import Semechka from "../menuList/restMenu/lula/BaranSemechka.jpg";
import BaranKost from "../menuList/restMenu/lula/ShashlikBaranKostochka.jpg";
import BaranRebro from "../menuList/restMenu/lula/ShashlikBaranRebro.jpg";
import BaranKare from "../menuList/restMenu/lula/KareBaran.jpg";
import ChickenShashlik from "../menuList/restMenu/lula/SashlikChicken.jpg";
import ShampLula from "../menuList/restMenu/lula/ShampinyonLula.jpg";
import Bayram from "../menuList/restMenu/lula/bayram.jpg";
import Order from "../Order";

interface LulaProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}

const Lula: React.FC<LulaProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: LulaData.length }, () => false)
  );

  const imageArray = [
    LulaTelyat,
    SashlikChaihona,
    SashlikChaihona,
    SashlikChaihona,
    SashlikChaihona,
    SashlikChaihona,
    UchPanza,
    Semechka,
    SashlikChaihona,
    BaranKost,
    BaranRebro,
    BaranKare,
    ChickenShashlik,
    ChickenShashlik,
    ShampLula,
    ShampLula,
    ShampLula,
    ShampLula,
    ShampLula,
    Bayram,
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
    switcher("lula");
    // setActive(!active);
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={() => switcherFunc()}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {LulaData.map((item, index) => (
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
        {LulaData.slice(0, 2).map((item, index) => (
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
        {LulaData.slice(2, 4).map((item, index) => (
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
        {LulaData.slice(4, 6).map((item, index) => (
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
        {LulaData.slice(6, 8).map((item, index) => (
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
        {LulaData.slice(8, 10).map((item, index) => (
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
        {LulaData.slice(10, 12).map((item, index) => (
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
        {LulaData.slice(12, 14).map((item, index) => (
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
        {LulaData.slice(14, 16).map((item, index) => (
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
        {LulaData.slice(16, 18).map((item, index) => (
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
        {LulaData.slice(18, 20).map((item, index) => (
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

export default Lula;
