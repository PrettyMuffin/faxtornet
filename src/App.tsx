import { createContext, useEffect, useState } from "react";
import Footer from "./Components/Footer";
import NavbarRenderer from "./Components/NavbarRenderer";
import HomePage from "./Components/home/HomePage";
import Info from "./Components/info/Info";
import Servizi from "./Components/servizi/Servizi";
import "./styles/css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContestType, Review } from "./Models";
import { GetRecensioni } from "./utils/Api";

export const PageContext = createContext<ContestType>({});

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [recensioni, setRecensioni] = useState<Review[]>([]);
  const [recensioniTotali, setRecensioniTotali] = useState(0);

  useEffect(() => {
    GetRecensioni().then((recensioni) => {
      setRecensioni(recensioni.reviews);
      setRecensioniTotali(recensioni.totalReviews);
    });
  }, []);


  const contextValue: ContestType = {
    currentPage,
    recensioni,
    recensioniTotali,
    setCurrentPage,
  };

  return (
    <PageContext.Provider value={contextValue}>
      <BrowserRouter>
        <header>
          <NavbarRenderer />
        </header>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/info" Component={Info} />
          <Route path="/servizi" Component={Servizi} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </PageContext.Provider>
  );
}

export default App;
