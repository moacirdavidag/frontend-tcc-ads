import React, { useEffect, useState } from 'react';
import "./style.css";
import { Metadados } from '../../components/Metadadados';
import { AreaFiltros } from '../../components/AreaFiltros';
import { Dado } from '../../components/Dado';
import { Campos } from '../../components/Campos';
import { useQueries } from '../../hooks/useQueries';
import { useParams } from 'react-router-dom';

export const ViewDados = () => {

  const [dados, setDados] = useState([]);
  const [consulta, setConsulta] = useState("bolsas");
  const [filtros, setFiltros] = useState(['aluno']);

  const { conjunto: nomeConjuntoDeDados } = useParams();

  let response = useQueries(consulta, filtros);

 

  useEffect(() => {
    document.title = `${nomeConjuntoDeDados} - Conjunto de Dados - Dados IFPB`;
  }, [])


  return (
    <>
      <div className="wrapper_metadados">
        <Metadados titulo={nomeConjuntoDeDados}
          fonte={"http://suap.ifpb.edu.br/api/ensino/alunos/v1/"}
          autor={"Diretoria-Geral do IFPB"}
          mantenedor={"dti@ifpb.edu.br"}
          dataAtualizacao={"4 de Setembro de 2019, 20:41 (UTC-3:00)"}
          dataCriacao={"1 de Abril de 2019, 12:27 (UTC-3:00)"}
        />
      </div>
      <AreaFiltros />
      <div className="wrapper_dados">
        <div className="area_campos">
          <div className="campos scrollbar">
            <Campos />
          </div>
        </div>
        <div className="dados">
          <Dado />
          <Dado />
        </div>
      </div>
    </>
  );
};
