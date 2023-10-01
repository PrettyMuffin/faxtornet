import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { PageContext } from "../App";

function HeaderLink() {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  return (
    <header className="header-link">
      <NavLink
        to={"/"}
        onClick={function () {
          setCurrentPage && setCurrentPage("home");
        }}
      >
        home
      </NavLink>{" "}
      / {currentPage}
    </header>
  );
}

export default HeaderLink;
