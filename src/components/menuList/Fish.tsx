import React, { useState } from "react";
import FishData from "../jsons/fish.json";

import Sibas from "../menuList/restMenu/fish/sibas.jpg";
import Dorado from "../menuList/restMenu/fish/dorado.jpg";
import LososTeriyake from "../menuList/restMenu/fish/lososteriyake.jpg";
import CrabCotlets from "../menuList/restMenu/fish/CrabCotlets.jpg";
import Sazan from "../menuList/restMenu/fish/sazan.jpg";
import FileSudak from "../menuList/restMenu/fish/FileSudaka.jpg";
import LososSardin from "../menuList/restMenu/fish/LososSardinski.jpg";
import Lingvini from "../menuList/restMenu/fish/lingvinicrab.jpg";
import Spagetti from "../menuList/restMenu/fish/spagettitrufel.jpg";
import Sous from "../menuList/restMenu/fish/souses.png";
import Order from "../Order";

interface FishProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}
const Fish: React.FC<FishProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: FishData.length }, () => false)
  );

  const imageArray = [
    Sibas,
    Dorado,
    LososTeriyake,
    CrabCotlets,
    Sazan,
    FileSudak,
    LososSardin,
    Lingvini,
    Spagetti,
    Sous,
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
    switcher("fish");
    // setActive(!active);
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={() => switcherFunc()}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {FishData.map((item, index) => (
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

export default Fish;
