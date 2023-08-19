import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { CurrentPageContext } from "../App";

function HeaderLink() {
  const { currentPage, setCurrentPage } = useContext(CurrentPageContext);

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
