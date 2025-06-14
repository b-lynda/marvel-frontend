import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Personnages from "./pages/Personnages";
import Comics from "./pages/Comics";
import ComicPerso from "./pages/ComicPerso";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/"} element={<Personnages />}/>
          {/* <Route path={"/login"} element={<Login />} /> */}
          <Route path={"/comics"} element={<Comics />} />
          <Route path={"/comics-perso/:id"} element={<ComicPerso/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
