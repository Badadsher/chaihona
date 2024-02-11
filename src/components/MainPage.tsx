import React, { useEffect, useState } from "react";
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
import Other from "../assets/restarauntimg/logos/other.png";

import Logo from "../assets/restarauntimg/logonew.png";
import { CSSTransition } from "react-transition-group";

import "./css/mainpage.css";
import PopupZale from "./PopupZale";
import Navbar from "./navbar";
import ContactsPopup from "./ContactsPopup";
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

  const [isActiveBtnZale, setActiveBtnZale] = useState(false);
  const [isActiveContact, setActiveContact] = useState(false);
  const [currentSlide, setSlide] = useState(0);
  const [currentFade, setFade] = useState("fade-in");

  const [navbarState, setNavbarState] = useState(false);

  const showNavbar = () => {
    setNavbarState(!navbarState);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prevIndex) => (prevIndex + 1) % menuPhoto.length);
      setFade("fade-in");
      async function asyncFunction() {
        setFade("fade-out");
      }

      setTimeout(async () => {
        await asyncFunction();
      }, 3000);
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [menuPhoto.length]);
  return (
    <div className="main">
      <div className="main-elements">
        <div className="main-elements_navbar">
          <Navbar
            active={navbarState}
            setActive={setNavbarState}
            showNavbar={showNavbar}
          ></Navbar>
          <div className="main-elements-left">
            <img src={Logo}></img>
          </div>

          <div className="main-elements-mid">
            <a href="#map">МЫ НА КАРТЕ</a>
            <a href="#tablebuyicon">БРОНЬ СТОЛИКА</a>
          </div>

          <div className="main-elements-right">
            <button className="" onClick={showNavbar}>
              <img src={Other}></img>
            </button>
          </div>
        </div>

        <div className="main-image">
          <img src={Plov}></img>
        </div>
        <div className="right-panel">
          <div className="right-panel_up">
            <a onClick={() => setActiveContact(true)}>КОНТАКТЫ</a>
            <a href="#restarauntmenu">МЕНЮ</a>
            <a onClick={() => setActiveBtnZale(true)}>АРЕНДА ЗАЛА</a>
          </div>
          <div className="right-panel_text">
            <h1>
              ВКУСНАЯ УЗБЕКСКАЯ И ЕВРОПЕЙСКАЯ КУХНЯ. ВЫПЕЧКА, БАР.
              <br /> ЖИВАЯ МУЗЫКА.
              <br />
              <br />
              М. ДОМОДЕДОВСКАЯ М. НАГАТИНСКАЯ/КОЛОМЕНСКАЯ
            </h1>
            <button>
              <a href="#restarauntmenu">МЕНЮ</a>
            </button>
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
                <img
                  className={currentFade}
                  src={menuPhoto[currentSlide]}
                ></img>
                <img
                  className={currentFade + 2}
                  src={menuPhoto[(currentSlide + 1) % menuPhoto.length]}
                ></img>
                <img
                  className={currentFade + 3}
                  src={menuPhoto[(currentSlide + 2) % menuPhoto.length]}
                ></img>
              </div>
            </CSSTransition>
          </div>
        </div>
      </div>

      <ContactsPopup active={isActiveContact} setActive={setActiveContact} />
      <PopupZale active={isActiveBtnZale} setActive={setActiveBtnZale} />
    </div>
  );
};

export default MainPage;
