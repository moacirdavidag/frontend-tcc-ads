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
import { ViewDadosPatrimonio } from "./pages/ViewDadosPatrimonio";
import { ViewDadosProjetosPesquisa } from "./pages/ViewDadosProjetosPesquisa";
import { ViewDadosProjetosExtensao } from "./pages/ViewDadosProjetosExtensao";
import { ViewDadosSetor } from "./pages/ViewDadosSetor";
import { ViewDadosServidores } from "./pages/ViewDadosServidores";
import { ViewDadosVersoesSuap } from "./pages/ViewDadosVersoesSuap";
import Error404 from "./pages/Error404";

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
          <Route path="/dados/patrimônio" element={<ViewDadosPatrimonio />} />
          <Route path="/dados/projetos de pesquisa" element={<ViewDadosProjetosPesquisa />} />
          <Route path="/dados/projetos de extensão" element={<ViewDadosProjetosExtensao />} />
          <Route path="/dados/setores" element={<ViewDadosSetor />} />
          <Route path="/dados/servidores" element={<ViewDadosServidores />} />
          <Route path="/dados/versões do SUAP" element={<ViewDadosVersoesSuap />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
