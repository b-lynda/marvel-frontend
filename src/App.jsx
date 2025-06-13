import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      {/* <Router>
        <Routes>
          <Route path={"/login"} element={<Login />} />
          <Route path={"/personnages"} element={<Personnage />} />
          <Route path={"/comics"} element={<Comics />} />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
