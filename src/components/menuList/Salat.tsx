import React, { useState } from "react";
import SalatData from "../jsons/salat.json";
import Chuhuk from "../menuList/restMenu/salat/chuchuk.jpg";
import Sevara from "../menuList/restMenu/salat/sevara.jpg";
import Olive from "../menuList/restMenu/salat/olive.jpg";
import BigGreen from "../menuList/restMenu/salat/biggreen.jpg";
import Adjabsandal from "../menuList/restMenu/salat/adzab.jpg";
import Strachat from "../menuList/restMenu/salat/strach.jpg";
import Rukolla from "../menuList/restMenu/salat/krevets.jpg";
import CezarKerevet from "../menuList/restMenu/salat/cezarkrevet.jpg";
import CezarChicken from "../menuList/restMenu/salat/cezarchicken.jpg";
import Sogdiana from "../menuList/restMenu/salat/sogdiana.jpg";
import Sitora from "../menuList/restMenu/salat/sitora.jpg";
import Vostok from "../menuList/restMenu/salat/vostok.jpg";
import Minor from "../menuList/restMenu/salat/minor.jpg";
import Zarafshon from "../menuList/restMenu/salat/zarafshon.jpg";
import Order from "../Order";
interface SalatProps {
  onData: (product: Order) => void;
  switcher: (action: string) => void;
  active: boolean;
}
const Salat: React.FC<SalatProps> = ({ onData, switcher, active }) => {
  const [buttonState, setButtonState] = useState(
    Array.from({ length: SalatData.length }, () => false)
  );

  const imageArray = [
    Chuhuk,
    Sevara,
    Olive,
    BigGreen,
    Adjabsandal,
    Strachat,
    Rukolla,
    CezarKerevet,
    CezarChicken,
    Sogdiana,
    Sitora,
    Vostok,
    Minor,
    Zarafshon,
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
    switcher("salat");
    // setActive(!active);
  };

  return (
    <div
      className={active ? "restarauntmenucold" : "restarauntmenuoff"}
      id="restarauntmenu"
    >
      <button onClick={switcherFunc}>ВЕРНУТЬСЯ</button>
      <div className="menu-container">
        {SalatData.map((item, index) => (
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

export default Salat;
