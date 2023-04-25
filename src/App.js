import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { ViewDados } from "./pages/ViewDados";
import { Sobre } from "./pages/Sobre";
import { ConjuntoDados } from "./pages/ConjuntoDados";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/conjuntos" element={<ConjuntoDados />} />
          <Route path="/conjuntos/:grupo" element={<ConjuntoDados />} />
          <Route path="/dados/:conjunto" element={<ViewDados />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
