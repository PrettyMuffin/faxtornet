import { NavLink } from "react-router-dom";
import { NavBar } from "../Models";

function Navbar({ currentPage, handlePage }: NavBar) {
  return (
    <section className="nav-links">
      <NavLink
        to={"/"}
        className={currentPage === "home" ? "link selected" : "link"}
        onClick={() => handlePage("home")}
      >
        Home
      </NavLink>
      <NavLink
        to={"/info"}
        className={currentPage === "info" ? "link selected" : "link"}
        onClick={() => handlePage("info")}
      >
        Info
      </NavLink>
      <NavLink
        to={"/servizi"}
        className={currentPage === "servizi" ? "link selected" : "link"}
        onClick={() => handlePage("servizi")}
      >
        Servizi
      </NavLink>
      <NavLink
        to={"/news"}
        className={currentPage === "news" ? "link selected" : "link"}
        onClick={() => handlePage("news")}
      >
        News
      </NavLink>
      <NavLink
        to={"/ricondizionati"}
        className={currentPage === "ricondizionati" ? "link selected" : "link"}
        onClick={() => handlePage("ricondizionati")}
      >
        Ricondizionati
      </NavLink>
    </section>
  );
}

export default Navbar;
