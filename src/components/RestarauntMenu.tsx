import React from "react";
import Bake from "../assets/restarauntimg/bake.jpg";
import BeerEat from "../assets/restarauntimg/beereat.jpg";
import Cold from "../assets/restarauntimg/cold.jpg";
import Drink from "../assets/restarauntimg/drink.png";
import Fish from "../assets/restarauntimg/fish.jpg";
import Garnir from "../assets/restarauntimg/garnir.jpg";
import Hot from "../assets/restarauntimg/hot.jpg";
import HotZak from "../assets/restarauntimg/hotzak.jpg";
import Lula from "../assets/restarauntimg/lula.jpg";
import Salat from "../assets/restarauntimg/salat.jpg";
import Soup from "../assets/restarauntimg/soup.jpg";
import Sweet from "../assets/restarauntimg/sweet.jpg";
import Plov from "../assets/restarauntimg/plov.png";
import "./css/restarauntmenu.css";

const RestarauntMenu: React.FC = () => {
  return (
    <div className="restarauntmenu" id="restarauntmenu">
      <div>
        <h1>МЕНЮ</h1>
        <div className="restarauntmenu-list">
          <div className="restarauntmenu-list_object">
            <img src={Cold}></img>
            <a>ХОЛОДНЫЕ ЗАКУСКИ</a>
            <button>СМОТРЕТЬ</button>
          </div>
          <div className="restarauntmenu-list_object">
            <img src={Salat}></img>
            <a>САЛАТЫ</a>
            <button>СМОТРЕТЬ</button>
          </div>

          <div className="restarauntmenu-list_object">
            <img src={HotZak}></img>
            <a>ГОРЯЧИЕ ЗАКУСКИ</a>
            <button>СМОТРЕТЬ</button>
          </div>

          <div className="restarauntmenu-list_object">
            <img src={Soup}></img>
            <a>СУПЫ</a>
            <button>СМОТРЕТЬ</button>
          </div>
        </div>
        <div className="restarauntmenu-list">
          <div className="restarauntmenu-list_object">
            <img src={Fish}></img>
            <a>РЫБНЫЕ БЛЮДА</a>
            <button>СМОТРЕТЬ</button>
          </div>
          <div className="restarauntmenu-list_object">
            <img src={Hot}></img>
            <a>ГОРЯЧИЕ БЛЮДА</a>
            <button>СМОТРЕТЬ</button>
          </div>

          <div className="restarauntmenu-list_object">
            <img src={Lula}></img>
            <a>БЛЮДА НА УГЛЯХ</a>
            <button>СМОТРЕТЬ</button>
          </div>

          <div className="restarauntmenu-list_object">
            <img src={Bake}></img>
            <a>ВЫПЕЧКА</a>
            <button>СМОТРЕТЬ</button>
          </div>
        </div>
        <div className="restarauntmenu-list">
          <div className="restarauntmenu-list_object">
            <img src={Garnir}></img>
            <a>ГАРНИРЫ</a>
            <button>СМОТРЕТЬ</button>
          </div>
          <div className="restarauntmenu-list_object">
            <img src={Sweet}></img>
            <a>ДЕСЕРТЫ</a>
            <button>СМОТРЕТЬ</button>
          </div>

          <div className="restarauntmenu-list_object">
            <img src={BeerEat}></img>
            <a>ЗАКУСКИ К ПИВУ</a>
            <button>СМОТРЕТЬ</button>
          </div>

          <div className="restarauntmenu-list_object">
            <img src={Drink}></img>
            <a>НАПИТКИ</a>
            <button>СМОТРЕТЬ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestarauntMenu;
