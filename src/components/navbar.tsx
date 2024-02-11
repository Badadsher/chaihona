import Close from "../assets/restarauntimg/logos/close.png";
import Arrow from "../assets/restarauntimg/arrow.png";
import ArrowLong from "../assets/restarauntimg/arrowlong.png";
import ContactsPopup from "./ContactsPopup";
import PopupZale from "./PopupZale";
import "./css/navbar.css";
import { useState } from "react";
interface NavbarProps {
  showNavbar: () => void;
  active: boolean;
  setActive: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ showNavbar, active }) => {
  const [isActiveBtnZale, setActiveBtnZale] = useState(false);
  const [isActiveContact, setActiveContact] = useState(false);
  return (
    <header className={active ? "navbaractive" : "navbaroff"}>
      <nav>
        <div className="leftpanel-center">
          <a onClick={() => setActiveContact(true)}>КОНТАКТЫ</a>
          <img src={Arrow}></img>
          <a onClick={() => setActiveBtnZale(true)}>АРЕНДА ЗАЛА</a>
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
      <ContactsPopup active={isActiveContact} setActive={setActiveContact} />
      <PopupZale active={isActiveBtnZale} setActive={setActiveBtnZale} />
    </header>
  );
};

export default Navbar;
