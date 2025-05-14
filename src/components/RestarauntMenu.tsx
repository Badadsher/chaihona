import {
  toggleCatalog,
  setActiveCategory,
  addProduct,
} from "./slices/menuSlice.ts";

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
import Market from "../assets/restarauntimg/logos/market.png";

import ColdFC from "././menuList/Components/Cold.tsx";
import SalatFC from "./menuList/Components/Salat.tsx";
import HotFC from "./menuList/Components/Hot.tsx";
import SoupFC from "./menuList/Components/Soup.tsx";
import FishFC from "./menuList/Components/Fish.tsx";
import HotFoodFC from "./menuList/Components/HotFood.tsx";
import LulaFC from "./menuList/Components/Lula.tsx";
import BakeFC from "./menuList/Components/Bake.tsx";
import GarnirFC from "./menuList/Components/Garnir.tsx";
import SweetFC from "./menuList/Components/Sweet.tsx";
import ZakuskaFC from "./menuList/Components/Zakuska.tsx";
import MarketFC from "./PopupMarket.tsx";
import DrinksFC from "./menuList/Components/Drinks.tsx";
import "./css/restarauntmenu.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store.ts";
import { useState } from "react";

interface CategoryConfig {
  key: string;
  title: string;
  image: string;
  Component: React.FC<{
    onData: (product: Product) => void;
    switcher: (key: string) => void;
    active: boolean;
  }>;
}

const categories: CategoryConfig[] = [
  { key: "cold", title: "ХОЛОДНЫЕ ЗАКУСКИ", image: Cold, Component: ColdFC },
  { key: "salat", title: "САЛАТЫ", image: Salat, Component: SalatFC },
  { key: "hot", title: "ГОРЯЧИЕ ЗАКУСКИ", image: HotZak, Component: HotFC },
  { key: "soup", title: "СУПЫ", image: Soup, Component: SoupFC },
  { key: "hotFood", title: "ГОРЯЧИЕ БЛЮДА", image: Hot, Component: HotFoodFC },
  { key: "garnish", title: "ГАРНИРЫ", image: Garnir, Component: GarnirFC },
  { key: "grill", title: "ШАШЛЫК", image: Lula, Component: LulaFC },
  { key: "bake", title: "ВЫПЕЧКА", image: Bake, Component: BakeFC },
  { key: "fish", title: "РЫБА", image: Fish, Component: FishFC },
  { key: "dessert", title: "ДЕСЕРТЫ", image: Sweet, Component: SweetFC },
  { key: "drink", title: "НАПИТКИ", image: Drink, Component: DrinksFC },
  { key: "beereat", title: "НАПИТКИ", image: BeerEat, Component: ZakuskaFC },
];

const RestarauntMenu: React.FC = () => {
  const [marketState, setMarketState] = useState(false);
  const dispatch = useDispatch();
  const { activeCategory, isCatalogOpen, selectedProducts } = useSelector(
    (state: RootState) => state.menuSlice
  );
  console.log({ activeCategory, isCatalogOpen });

  const switchKatalog = (key: string) => {
    dispatch(toggleCatalog());
    dispatch(setActiveCategory(key));
  };

  const addToCart = (product: Product) => {
    dispatch(addProduct(product));
  };
  return (
    <section>
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
      {isCatalogOpen ? (
        <div className="restarauntmenu-list-wrapper">
          <div className="restarauntmenu-list">
            {categories.slice(0, 4).map(({ key, title, image }) => (
              <div className="restarauntmenu-list_object" key={key}>
                <img src={image} alt={title} />
                <a>{title}</a>
                <button onClick={() => switchKatalog(key)}>СМОТРЕТЬ</button>
              </div>
            ))}
          </div>

          <div className="restarauntmenu-list">
            {categories.slice(4, 8).map(({ key, title, image }) => (
              <div className="restarauntmenu-list_object" key={key}>
                <img src={image} alt={title} />
                <a>{title}</a>
                <button onClick={() => switchKatalog(key)}>СМОТРЕТЬ</button>
              </div>
            ))}
          </div>

          <div className="restarauntmenu-list">
            {categories.slice(8).map(({ key, title, image }) => (
              <div className="restarauntmenu-list_object" key={key}>
                <img src={image} alt={title} />
                <a>{title}</a>
                <button onClick={() => switchKatalog(key)}>СМОТРЕТЬ</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        categories.map(({ key, Component }) =>
          activeCategory === key ? (
            <Component
              key={key}
              onData={addToCart}
              switcher={switchKatalog}
              active={true}
            />
          ) : null
        )
      )}
      <MarketFC
        active={marketState}
        setActive={setMarketState}
        selectedProducts={selectedProducts}
      ></MarketFC>
    </section>
  );
};

export default RestarauntMenu;
