import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Portoes from "./pages/Portoes";
import Diferenciais from "./pages/Diferenciais";
import Contato from "./pages/Contato";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/sobre"
          element={<Sobre />}
        />

        <Route
          path="/servicos"
          element={<Servicos />}
        />

        <Route
          path="/portoes"
          element={<Portoes />}
        />

        <Route
          path="/diferenciais"
          element={<Diferenciais />}
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