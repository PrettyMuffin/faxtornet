import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CurrentPageContext } from "../App";

import logo from "../assets/images/Logo.png";

function Navbar() {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
  const navigator = useNavigate();

  function handleClick(link: string) {
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
      <section className="nav-links">
        <NavLink
          to={"/"}
          className={currentPage === "home" ? "link selected" : "link"}
          onClick={() => handleClick("home")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/info"}
          className={currentPage === "info" ? "link selected" : "link"}
          onClick={() => handleClick("info")}
        >
          Info
        </NavLink>
        <NavLink
          to={"/servizi"}
          className={currentPage === "servizi" ? "link selected" : "link"}
          onClick={() => handleClick("servizi")}
        >
          Servizi
        </NavLink>
        <NavLink
          to={"/news"}
          className={currentPage === "news" ? "link selected" : "link"}
          onClick={() => handleClick("news")}
        >
          News
        </NavLink>
        <NavLink
          to={"/ricondizionati"}
          className={
            currentPage === "ricondizionati" ? "link selected" : "link"
          }
          onClick={() => handleClick("ricondizionati")}
        >
          Ricondizionati
        </NavLink>
      </section>
    </nav>
  );
}

export default Navbar;
