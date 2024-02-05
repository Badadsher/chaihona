import React, { useState } from "react";
import SweetData from "../jsons/sweet.json";
import Tort from "../menuList/restMenu/sweet/tort.jpg";
import Fistash from "../menuList/restMenu/sweet/rouletfistash.png";
import Maskar from "../menuList/restMenu/sweet/maskarpone.png";
import Browny from "../menuList/restMenu/sweet/browny.png";
import Sorbet from "../menuList/restMenu/sweet/sorbet.png";
import Ice from "../menuList/restMenu/sweet/ise.png";

import Order from "../Order";

interface SweetProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}

const Sweet: React.FC<SweetProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: SweetData.length }, () => false)
  );

  const imageArray = [
    Tort,
    Tort,
    Tort,
    Tort,
    Tort,
    Fistash,
    Maskar,
    Browny,
    Sorbet,
    Ice,
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
    switcher("sweet");
    // setActive(!active);
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={() => switcherFunc()}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {SweetData.map((item, index) => (
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
    </div>
  );
};

export default Sweet;
