import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { CurrentPageContext } from "../App";

import logo from "../assets/images/Logo.png";
import { useLocation, useNavigate } from "react-router-dom";

function NavbarRenderer() {
  const [currentWidth] = useState(window.innerWidth);

  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const navigator = useNavigate();

  const location = useLocation();

  // questo risolve il bug che al refresh della pagina la current page diventava la home ma rimaneva sulla pagina precedente
  useEffect(() => {
    let locationPage = location.pathname.split("/")[1]; // ottengo il nome della pagina dal link togliendo "/" dato che ritorna anche quella
    if (locationPage) {
      setCurrentPage && setCurrentPage(locationPage);
    } else {
      setCurrentPage && setCurrentPage("home");
    }
  }, []);

  function handlePage(link: string) {
    setCurrentPage && setCurrentPage(link);
  }

  function tornaAllaHome() {
    if (currentPage !== "home") {
      setCurrentPage && setCurrentPage("home");
      navigator("/");
    }
  }

  return (
    <nav className="navbar" id="navbar">
      <img src={logo} onClick={tornaAllaHome} />
      {currentWidth <= 768 ? (
        <MobileNavbar currentPage={currentPage!} handlePage={handlePage} />
      ) : (
        <Navbar currentPage={currentPage!} handlePage={handlePage} />
      )}
    </nav>
  );
}

export default NavbarRenderer;
