
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./assets/css/GlobalStyle";
import HomePage from "./pages/HomePage";



function App() {
  return (
    <div >
      <GlobalStyle />
      {/* <Routes>
        <Route />
      </Routes> */}
      <HomePage />
      
    </div>
  );
}

export default App;
