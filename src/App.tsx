import React, { FC } from "react";
import "./App.css";
import Main from "./components/MainPage.jsx";
import LeftPanel from "./components/leftPanel/LeftPanel.js";

import Logo from "./assets/restarauntimg/logo.svg";
import Arrow from "./assets/restarauntimg/arrow.png";
import ArrowLong from "./assets/restarauntimg/arrowlong.png";
import Info from "./components/Info.js";
import RestarauntMenu from "./components/RestarauntMenu.js";
import MapBar from "./components/MapBar.js";
import Footer from "./components/Footer.js";
import TableBuy from "./components/TableBuy.js";
const App: React.FC = () => {
  return (
    <>
      <React.Fragment>
        <div>
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
              <RestarauntMenu></RestarauntMenu>
              <TableBuy></TableBuy>
              <MapBar></MapBar>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </React.Fragment>
    </>
  );
};

export default App;
