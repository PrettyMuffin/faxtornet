import { createContext, useState } from "react";
import Footer from "./Components/Footer";
import NavbarRenderer from "./Components/NavbarRenderer";
import HomePage from "./Components/home/HomePage";
import Info from "./Components/info/Info";
import News from "./Components/news/News";
import Ricondizionati from "./Components/ricondizionati/Ricondizionati";
import Servizi from "./Components/servizi/Servizi";
import "./styles/css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContestType } from "./Models";

export const CurrentPageContext = createContext<ContestType>({});

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const contextValue: ContestType = {
    currentPage,
    setCurrentPage,
  };

  return (
    <CurrentPageContext.Provider value={contextValue}>
      <BrowserRouter>
        <header>
          <NavbarRenderer />
        </header>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/info" Component={Info} />
          <Route path="/servizi" Component={Servizi} />
          <Route path="/news" Component={News} />
          <Route path="/ricondizionati" Component={Ricondizionati} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CurrentPageContext.Provider>
  );
}

export default App;
