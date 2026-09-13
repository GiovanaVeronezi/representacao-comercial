import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Portoes from "./pages/Portoes";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/sobre"
          element={<Sobre />}
        />

        <Route
          path="/portoes"
          element={<Portoes />}
        />

        <Route
          path="/contato"
          element={<Contato />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;