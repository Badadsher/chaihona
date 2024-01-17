import React, { useEffect, useState } from "react";
import firstPhoto from "../assets/restarauntimg/first.png";
import secondPhoto from "../assets/restarauntimg/second.png";
import thirdPhoto from "../assets/restarauntimg/third.png";
import circle from "../assets/restarauntimg/logos/circle.png";
import music from "../assets/restarauntimg/logos/guitar.png";
import delivery from "../assets/restarauntimg/logos/delivery.png";
import percent from "../assets/restarauntimg/logos/percent.png";
import { CSSTransition } from "react-transition-group";

import "./css/info.css";
const Info: React.FC = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos: Array<string> = [firstPhoto, secondPhoto, thirdPhoto];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhoto((prevIndex) => (prevIndex + 1) % photos.length);
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }, [photos.length]);

  return (
    // <div className="info">
    //   <div className="info_carousel">
    //     <img src={photos[currentPhoto]}></img>
    //   </div>
    // </div>
    <div className="info">
      <div>
        <CSSTransition
          key={currentPhoto}
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
          <div className="info_carousel">
            <img
              src={photos[currentPhoto]}
              alt={`Carousel ${currentPhoto}`}
              className="carousel-image"
            />
          </div>
        </CSSTransition>
      </div>
      <div className="circle-list">
        <img
          src={circle}
          className={currentPhoto == 0 ? "setcircle" : "normalcircle"}
        ></img>
        <img
          className={currentPhoto == 1 ? "setcircle" : "normalcircle"}
          src={circle}
        ></img>
        <img
          className={currentPhoto == 2 ? "setcircle" : "normalcircle"}
          src={circle}
        ></img>
      </div>
      <div className="info-logo_music">
        <img src={music}></img>
        <a>
          Живая музыка каждую пятницу и <br /> субботу{" "}
        </a>
      </div>
      <div className="info-logos">
        <div className="info-logos_delivery">
          <img src={delivery}></img>
          <a>
            Бесплатная доставка в течении 30 минут <br /> На дом, в офис, на
            мероприятие. Онлайн оплата. <br /> Мы принимаем VISA, MasterCard.
          </a>
        </div>
        <div className="info-logos_percent">
          <img src={percent}></img>
          <a>
            В день рождения скидка имениннику 10% <br /> Скидка действует и на
            посещение ресторана, и на доставку <br /> Необходимо предъявить
            паспорт
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
