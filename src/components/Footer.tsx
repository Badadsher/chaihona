import React from "react";
import "./css/footer.css";
import logo from "../assets/restarauntimg/logo.svg";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo}></img>
      </div>
      <div className="footer_text">
        <div className="footer_text-func">
          <a href="https://yandex.ru/maps/org/yalla/237702140159/reviews/?ll=37.772357%2C55.601232&z=12.8">
            ОТЗЫВЫ
          </a>
          <a href="https://yandex.ru/search/?text=%D1%80%D0%B5%D1%81%D1%82%D0%BE%D1%80%D0%B0%D0%BD+%D1%8F%D0%BB%D0%BB%D0%B0+%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0+%D0%A4%D0%9E%D0%A2%D0%9E&lr=213&clid=2372572&win=562">
            ФОТОГРАФИИ
          </a>
          <a href="https://yandex.ru/maps/213/moscow/search/ресторан%20яллы/?ll=37.711083%2C55.637620&sll=37.713786%2C55.616451&source=serp_navig&sspn=0.136986%2C0.044884&z=13">
            АДРЕСА
          </a>
        </div>
        <p>COPYRIGHT 2024 ALISHER NASYROV</p>
      </div>
      <div className="footer_number">
        <a>
          ПН-ЧТ+ВС <span>10:00-02:00</span>
        </a>
        <a>
          ПТ,СБ <span>10:00-3:00</span>
        </a>
        <h1>
          +7 (903) 799 34 37
          <br />
          +7 (968) 850 80 90
        </h1>
      </div>
    </div>
  );
};

export default Footer;
