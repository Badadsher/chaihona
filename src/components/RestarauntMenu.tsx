import React, { useState } from "react";
import Product from "./Order.ts";
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

import ColdFC from "./menuList/Cold.tsx";
import SalatFC from "./menuList/Salat.tsx";
import HotFC from "./menuList/Hot.tsx";
import SoupFC from "./menuList/Soup.tsx";
import FishFC from "./menuList/Fish.tsx";
import HotFoodFC from "./menuList/HotFood.tsx";
import LulaFC from "./menuList/Lula.tsx";
import BakeFC from "./menuList/Bake.tsx";
import GarnirFC from "./menuList/Garnir.tsx";
import SweetFC from "./menuList/Sweet.tsx";
import ZakuskaFC from "./menuList/Zakuska.tsx";
import MarketFC from "./PopupMarket.tsx";
import Plov from "../assets/restarauntimg/plov.png";

import Market from "../assets/restarauntimg/logos/market.png";
import "./css/restarauntmenu.css";

const RestarauntMenu: React.FC = () => {
  const [marketState, setMarketState] = useState(false);

  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const [katalogState, setKatalogState] = useState(true);

  const [activeCold, setActiveCold] = useState(false);
  const [activeSalat, setActiveSalat] = useState(false);
  const [activeHot, setActiveHot] = useState(false);
  const [activeSoup, setActiveSoup] = useState(false);
  const [activeFish, setActiveFish] = useState(false);
  const [activeHotFood, setActiveHotFood] = useState(false);
  const [activeLula, setActiveLula] = useState(false);
  const [activeBake, setActiveBake] = useState(false);
  const [activeGarnir, setActiveGarnir] = useState(false);
  const [activeSweet, setActiveSweet] = useState(false);
  const [activeZakuska, setActiveZakuska] = useState(false);

  const switchKatalog = (action: string) => {
    if (katalogState) {
      setKatalogState(false);
    } else {
      setKatalogState(true);
    }

    switch (action) {
      case "cold":
        setActiveCold(!activeCold);
        break;

      case "salat":
        setActiveSalat(!activeSalat);
        break;

      case "hot":
        setActiveHot(!activeHot);
        break;

      case "soup":
        setActiveSoup(!activeSoup);
        break;

      case "fish":
        setActiveFish(!activeFish);
        break;

      case "hotfood":
        setActiveHotFood(!activeHotFood);
        break;

      case "lula":
        setActiveLula(!activeLula);
        break;

      case "bake":
        setActiveBake(!activeBake);
        break;

      case "garnir":
        setActiveGarnir(!activeGarnir);
        break;

      case "sweet":
        setActiveSweet(!activeSweet);
        break;

      case "zakuska":
        setActiveZakuska(!activeZakuska);
        break;

      default:
        break;
    }
  };

  const addToCart = (product: Product) => {
    setSelectedProducts([...selectedProducts, product]);
  };

  return (
    <div>
      <div className="restarauntmenu-top">
        <div></div>
        <div>
          <h1>МЕНЮ</h1>
        </div>

        <div className="restarauntmenu-top_market">
          <button
            onClick={() => {
              setMarketState(true);
            }}
          >
            <img src={Market}></img>
            КОРЗИНА
          </button>
        </div>
      </div>

      <div
        className={katalogState ? "restarauntmenu" : "restarauntmenuoff"}
        id="restarauntmenu"
      >
        <div>
          <div className="restarauntmenu-list">
            <div className="restarauntmenu-list_object">
              <img src={Cold}></img>
              <a>ХОЛОДНЫЕ ЗАКУСКИ</a>
              <button onClick={() => switchKatalog("cold")}>СМОТРЕТЬ</button>
            </div>
            <div className="restarauntmenu-list_object">
              <img src={Salat}></img>
              <a>САЛАТЫ</a>
              <button onClick={() => switchKatalog("salat")}>СМОТРЕТЬ</button>
            </div>

            <div className="restarauntmenu-list_object">
              <img src={HotZak}></img>
              <a>ГОРЯЧИЕ ЗАКУСКИ</a>
              <button onClick={() => switchKatalog("hot")}>СМОТРЕТЬ</button>
            </div>

            <div className="restarauntmenu-list_object">
              <img src={Soup}></img>
              <a>СУПЫ</a>
              <button onClick={() => switchKatalog("soup")}>СМОТРЕТЬ</button>
            </div>
          </div>
          <div className="restarauntmenu-list">
            <div className="restarauntmenu-list_object">
              <img src={Fish}></img>
              <a>РЫБНЫЕ БЛЮДА</a>
              <button onClick={() => switchKatalog("fish")}>СМОТРЕТЬ</button>
            </div>
            <div className="restarauntmenu-list_object">
              <img src={Hot}></img>
              <a>ГОРЯЧИЕ БЛЮДА</a>
              <button onClick={() => switchKatalog("hotfood")}>СМОТРЕТЬ</button>
            </div>

            <div className="restarauntmenu-list_object">
              <img src={Lula}></img>
              <a>БЛЮДА НА УГЛЯХ</a>
              <button onClick={() => switchKatalog("lula")}>СМОТРЕТЬ</button>
            </div>

            <div className="restarauntmenu-list_object">
              <img src={Bake}></img>
              <a>ВЫПЕЧКА</a>
              <button onClick={() => switchKatalog("bake")}>СМОТРЕТЬ</button>
            </div>
          </div>
          <div className="restarauntmenu-list">
            <div className="restarauntmenu-list_object">
              <img src={Garnir}></img>
              <a>ГАРНИРЫ</a>
              <button onClick={() => switchKatalog("garnir")}>СМОТРЕТЬ</button>
            </div>
            <div className="restarauntmenu-list_object">
              <img src={Sweet}></img>
              <a>ДЕСЕРТЫ</a>
              <button onClick={() => switchKatalog("sweet")}>СМОТРЕТЬ</button>
            </div>

            <div className="restarauntmenu-list_object">
              <img src={BeerEat}></img>
              <a>ЗАКУСКИ К ПИВУ</a>
              <button onClick={() => switchKatalog("zakuska")}>СМОТРЕТЬ</button>
            </div>

            <div className="restarauntmenu-list_object">
              <img src={Drink}></img>
              <a>НАПИТКИ</a>
              <button>СМОТРЕТЬ</button>
            </div>
          </div>
        </div>
      </div>
      <MarketFC
        active={marketState}
        setActive={setMarketState}
        selectedProducts={selectedProducts}
      ></MarketFC>
      <ColdFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeCold}
      ></ColdFC>
      <SalatFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeSalat}
      ></SalatFC>
      <HotFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeHot}
      ></HotFC>
      <SoupFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeSoup}
      ></SoupFC>
      <FishFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeFish}
      ></FishFC>
      <HotFoodFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeHotFood}
      ></HotFoodFC>
      <LulaFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeLula}
      ></LulaFC>
      <BakeFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeBake}
      ></BakeFC>
      <GarnirFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeGarnir}
      ></GarnirFC>
      <SweetFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeSweet}
      ></SweetFC>
      <ZakuskaFC
        onData={addToCart}
        switcher={switchKatalog}
        active={activeZakuska}
      ></ZakuskaFC>
    </div>
  );
};

export default RestarauntMenu;
