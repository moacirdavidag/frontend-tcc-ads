import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { ViewDados } from "./pages/ViewDados";
import { Sobre } from "./pages/Sobre";
import { ConjuntoDados } from "./pages/ConjuntoDados";
import { ViewDadosAlunos } from "./pages/ViewDadosAlunos";
import { ViewDadosCursos } from "./pages/ViewDadosCursos";
import { ViewDadosBolsas } from "./pages/ViewDadosBolsas";
import { ViewDadosCampi } from "./pages/ViewDadosCampi";
import { ViewDadosMatrizes } from "./pages/ViewDadosMatrizes";
import { ViewDadosPatrimonio } from "./pages/ViewDadosPatrimonio";

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
          <Route path="/dados/alunos" element={<ViewDadosAlunos />} />
          <Route path="/dados/cursos" element={<ViewDadosCursos />} />
          <Route path="/dados/bolsas" element={<ViewDadosBolsas />} />
          <Route path="/dados/campi" element={<ViewDadosCampi />} />
          <Route path="/dados/matrizes" element={<ViewDadosMatrizes />} />
          <Route path="/dados/patrimonio" element={<ViewDadosPatrimonio />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
