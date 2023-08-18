import { GiHamburgerMenu } from "react-icons/gi";
import { BiHome, BiInfoCircle } from "react-icons/bi";
import { MdDesignServices, MdAutorenew } from "react-icons/md";
import { FaRegNewspaper } from "react-icons/fa";
import { NavBar } from "../Models";
import { NavLink } from "react-router-dom";
import { useRef } from "react";

function MobileNavbar({ currentPage, handlePage }: NavBar) {
  const navRef = useRef<HTMLElement>(null);

  function activateSlide() {
    navRef.current?.classList.toggle("slide-in");
  }

  return (
    <section className="mobile-nav">
      <GiHamburgerMenu
        size={"3.5rem"}
        onClick={activateSlide}
        className={"hamburger"}
      />
      <section className="nav-wrapper" ref={navRef} onClick={activateSlide}>
        <section className={`mobile-nav-links `}>
          <NavLink
            to={"/"}
            className={currentPage === "home" ? "link selected" : "link"}
            onClick={() => handlePage("home")}
          >
            <BiHome
              className={currentPage === "home" ? "icon selected" : "icon"}
            />
            Home
          </NavLink>
          <NavLink
            to={"/info"}
            className={currentPage === "info" ? "link selected" : "link"}
            onClick={() => handlePage("info")}
          >
            <BiInfoCircle
              className={currentPage === "info" ? "icon selected" : "icon"}
            />
            Info
          </NavLink>
          <NavLink
            to={"/servizi"}
            className={currentPage === "servizi" ? "link selected" : "link"}
            onClick={() => handlePage("servizi")}
          >
            <MdDesignServices
              className={currentPage === "servizi" ? "icon selected" : "icon"}
            />
            Servizi
          </NavLink>
          <NavLink
            to={"/news"}
            className={currentPage === "news" ? "link selected" : "link"}
            onClick={() => handlePage("news")}
          >
            <FaRegNewspaper
              className={currentPage === "news" ? "icon selected" : "icon"}
            />
            News
          </NavLink>
          <NavLink
            to={"/ricondizionati"}
            className={
              currentPage === "ricondizionati" ? "link selected" : "link"
            }
            onClick={() => handlePage("ricondizionati")}
          >
            <MdAutorenew
              className={
                currentPage === "ricondizionati" ? "icon selected" : "icon"
              }
            />{" "}
            Ricondizionati
          </NavLink>
        </section>
      </section>
    </section>
  );
}

export default MobileNavbar;
