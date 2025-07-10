import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aurora from "./components/Aurora";
import Beach from "./components/Beach";
import Forest from "./components/Forest";
import Lake from "./components/Lake";
import Milky from "./components/Milky";
import Jungle from "./components/Jungle";
import Navegacion from "./components/Navegacion";

function App() {
  return (
    <Router>
      <div className="container">
        <h1 className="text-center mt-3 mb-3 text-white">Galeria</h1>
      </div>
      <Routes>
        <Route path="/Aurora" Component={Aurora} />
        <Route path="/Beach" Component={Beach} />
        <Route path="/Forest" Component={Forest} />
        <Route path="/Jungle" Component={Jungle} />
        <Route path="/Lake" Component={Lake} />
        <Route path="/Milky" Component={Milky} />
      </Routes>

      <Navegacion />
    </Router>
  );
}

export default App;
