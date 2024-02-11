import { useRef } from "react";
import Close from "../assets/restarauntimg/logos/close.png";
import Arrow from "../assets/restarauntimg/arrow.png";
import ArrowLong from "../assets/restarauntimg/arrowlong.png";
import "./css/navbar.css";
interface NavbarProps {
  showNavbar: () => void;
  active: boolean;
  setActive: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ showNavbar, active }) => {
  return (
    <header className={active ? "navbaractive" : "navbaroff"}>
      <nav>
        <div className="leftpanel-center">
          <a href="#map" onClick={showNavbar}>
            МЫ НА КАРТЕ
          </a>
          <img src={Arrow}></img>
          <a href="#tablebuyicon" onClick={showNavbar}>
            БРОНЬ СТОЛИКА
          </a>
          <img src={Arrow}></img>
        </div>

        <div className="leftpanel-end">
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
        </div>

        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <img src={Close}></img>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
