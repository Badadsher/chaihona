import React, { FC, useEffect, useRef, useState } from "react";
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
import { CSSTransition } from "react-transition-group";
import "./css/mainpage.css";
const MainPage: React.FC = () => {
  const menuPhoto: Array<string> = [
    Bake,
    BeerEat,
    Cold,
    Drink,
    Fish,
    Garnir,
    Hot,
    HotZak,
    Lula,
    Salat,
    Soup,
    Sweet,
  ];

  const [currentSlide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prevIndex) => (prevIndex + 1) % menuPhoto.length);
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, [menuPhoto.length]);
  return (
    <div className="main">
      <div className="main-elements">
        <div className="main-image">
          <img src={Plov}></img>
        </div>
        <div className="right-panel">
          <div className="right-panel_up">
            <p>КОНТАКТЫ</p>
            <p>МЕНЮ</p>
            <p>АРЕНДА ЗАЛА</p>
          </div>
          <div className="right-panel_text">
            <h1>
              ВКУСНАЯ УЗБЕКСКАЯ И ЕВРОПЕЙСКАЯ КУХНЯ. ВЫПЕЧКА, БАР.
              <br /> ЖИВАЯ МУЗЫКА.
              <br />
              <br />
              М. ДОМОДЕДОВСКАЯ М. НАГАТИНСКАЯ/КОЛОМЕНСКАЯ
            </h1>
            <button>МЕНЮ</button>
          </div>

          <div className="right-panel_menu">
            <CSSTransition
              key={currentSlide}
              in={true}
              appear={true}
              timeout={1000}
              classNames={{
                enter: "fade-enter",
                enterActive: "fade-enter-active",
                exit: "fade-exit",
                exitActive: "fade-exit-active",
              }}
            >
              <div className="right-panel_menu-photos">
                <img src={menuPhoto[currentSlide]}></img>
                <img
                  src={menuPhoto[(currentSlide + 1) % menuPhoto.length]}
                ></img>
                <img
                  src={menuPhoto[(currentSlide + 2) % menuPhoto.length]}
                ></img>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
