
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import Ficha from "./components/Ficha";
import { greciaVinhosDomaine } from "./constants/BD";
import HomePage from "./pages/HomePage";
import WinesPage from "./pages/WinesPage";



function App() {
  return (
    <div >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vinhos" element={<WinesPage />} />
          {greciaVinhosDomaine.map((d) => (<Route key={d.id} path={`/${d.url}`} element={<Ficha d={d}/>} />))}
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
