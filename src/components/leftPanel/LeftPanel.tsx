import React, { useState } from "react";
import "./leftpanel.css";
import Popup from "../Popup";

interface LeftPanelProps {
  Logo: string;
  Arrow: string;
  ArrowLong: string;
}

const LeftPanel: React.FC<LeftPanelProps> = ({ Logo, Arrow, ArrowLong }) => {
  const [isActiveBtn, setActiveBtn] = useState(false);
  return (
    <div className="leftpanel">
      <div className="leftpanel-up">
        <img src={Logo}></img>
        <h1>ЧАЙХОНА ЯЛЛА </h1>
      </div>

      <div className="leftpanel-center">
        <a href="#map">МЫ НА КАРТЕ</a>
        <img src={Arrow}></img>
        <a onClick={() => setActiveBtn(true)}>БРОНЬ СТОЛИКА</a>
        <img src={Arrow}></img>
      </div>

      <div className="leftpanel-down">
        <p>
           ул. Генерала Белова д. 18б <br />
          +7 (903) 799 34 37
        </p>
        <img src={ArrowLong}></img>
        <p>
           ул. Нагатинская д. 16 <br /> +7 (968) 850 80 90
        </p>
      </div>
      <Popup active={isActiveBtn} setActive={setActiveBtn} />
    </div>
  );
};

export default LeftPanel;
