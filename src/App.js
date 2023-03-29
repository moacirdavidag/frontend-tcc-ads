import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { ViewDados } from "./pages/ViewDados";
import { Sobre } from "./pages/Sobre";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dados/alunos" element={<ViewDados />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
