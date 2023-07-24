import { Header } from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
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
import BuscaConjuntoDados from "./pages/BuscaConjuntoDados";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/busca" element={<BuscaConjuntoDados />} />
          <Route path="/conjuntos" element={<ConjuntoDados />} />
          <Route path="/conjuntos/:grupo" element={<ConjuntoDados />} />
          <Route path="/dados/alunos" element={<ViewDadosAlunos />} />
          <Route path="/dados/cursos" element={<ViewDadosCursos />} />
          <Route path="/dados/bolsas" element={<ViewDadosBolsas />} />
          <Route path="/dados/campi" element={<ViewDadosCampi />} />
          <Route path="/dados/patrimônio" element={<ViewDadosPatrimonio />} />
          <Route path="/dados/projetos_de_pesquisa" element={<ViewDadosProjetosPesquisa />} />
          <Route path="/dados/projetos_de_extensão" element={<ViewDadosProjetosExtensao />} />
          <Route path="/dados/setores" element={<ViewDadosSetor />} />
          <Route path="/dados/servidores" element={<ViewDadosServidores />} />
          <Route path="/dados/versões_do_SUAP" element={<ViewDadosVersoesSuap />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
