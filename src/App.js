import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import Ficha from "./components/Ficha";
import ContactPage from "./pages/ContactPage";
import DestPage from "./pages/DestPage";
import HomePage from "./pages/HomePage";
import WinesPage from "./pages/WinesPage";

function App() {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vinhos" element={<WinesPage />} />
          <Route path="/vinhos/:name" element={<Ficha />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="/destilados" element={<DestPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
