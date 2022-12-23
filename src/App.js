
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
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
        </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
