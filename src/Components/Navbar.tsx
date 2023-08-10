import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/Logo.png";
type Props = {};

function Navbar({}: Props) {
  const [activeLink, setActiveLink] = useState("home");
  const navigator = useNavigate();

  function handleClick(link: string) {
    setActiveLink(link);
  }

  function TornaAllaHome() {
    if (activeLink !== "home") {
      setActiveLink("home");
      navigator("/");
    }
  }

  return (
    <nav className="navbar">
      <img src={logo} onClick={TornaAllaHome} />
      <section className="nav-links">
        <NavLink
          to={"/"}
          className={activeLink === "home" ? "link selected" : "link"}
          onClick={() => handleClick("home")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/info"}
          className={activeLink === "info" ? "link selected" : "link"}
          onClick={() => handleClick("info")}
        >
          Info
        </NavLink>
        <NavLink
          to={"/servizi"}
          className={activeLink === "servizi" ? "link selected" : "link"}
          onClick={() => handleClick("servizi")}
        >
          Servizi
        </NavLink>
        <NavLink
          to={"/news"}
          className={activeLink === "news" ? "link selected" : "link"}
          onClick={() => handleClick("news")}
        >
          News
        </NavLink>
        <NavLink
          to={"/ricondizionati"}
          className={activeLink === "ricondizionati" ? "link selected" : "link"}
          onClick={() => handleClick("ricondizionati")}
        >
          Ricondizionati
        </NavLink>
      </section>
    </nav>
  );
}

export default Navbar;
