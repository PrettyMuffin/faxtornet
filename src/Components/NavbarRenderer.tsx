import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { useState } from "react";
import { useContext } from "react";
import { CurrentPageContext } from "../App";

import logo from "../assets/images/Logo.png";
import { useNavigate } from "react-router-dom";

function NavbarRenderer() {
  const [currentWidth] = useState(window.innerWidth);

  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const navigator = useNavigate();

  function handlePage(link: string) {
    setCurrentPage && setCurrentPage(link);
  }

  function TornaAllaHome() {
    if (currentPage !== "home") {
      setCurrentPage && setCurrentPage("home");
      navigator("/");
    }
  }

  return (
    <nav className="navbar" id="navbar">
      <img src={logo} onClick={TornaAllaHome} />
      {currentWidth <= 768 ? (
        <MobileNavbar currentPage={currentPage!} handlePage={handlePage} />
      ) : (
        <Navbar currentPage={currentPage!} handlePage={handlePage} />
      )}
    </nav>
  );
}

export default NavbarRenderer;
