import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/home/HomePage";
import Info from "./Components/info/Info";
import News from "./Components/news/News";
import Ricondizionati from "./Components/ricondizionati/Ricondizionati";
import Servizi from "./Components/servizi/Servizi";
import "./styles/css/main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/info" Component={Info} />
        <Route path="/servizi" Component={Servizi} />
        <Route path="/news" Component={News} />
        <Route path="/ricondizionati" Component={Ricondizionati} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
