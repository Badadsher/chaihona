import React, { FC } from "react";
import "./App.css";
import Main from "./components/MainPage.jsx";
import LeftPanel from "./components/leftPanel/LeftPanel.js";

import Logo from "./assets/restarauntimg/logo.svg";
import Arrow from "./assets/restarauntimg/arrow.png";
import ArrowLong from "./assets/restarauntimg/arrowlong.png";
import Info from "./components/Info.js";
const App: React.FC = () => {
  return (
    <>
      <React.Fragment>
        <div className="page">
          <div className="left">
            <LeftPanel
              ArrowLong={ArrowLong}
              Arrow={Arrow}
              Logo={Logo}
            ></LeftPanel>
          </div>

          <div className="sections">
            <Main></Main>
            <Info></Info>
          </div>
        </div>
      </React.Fragment>
    </>
  );
};

export default App;
