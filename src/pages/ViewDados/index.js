import React, { useEffect, useState } from 'react';
import "./style.css";
import { Metadados } from '../../components/Metadadados';
import { AreaFiltros } from '../../components/AreaFiltros';
import { Dado } from '../../components/Dado';
import { Campos } from '../../components/Campos';
import { useQueries } from '../../hooks/useQueries';
import { useParams } from 'react-router-dom';

import { retornarConjuntoDados } from '../../services/metadadosConjunto';
import { nomeCojuntoDados } from '../../services/nomeConjuntoDadosUpperCase';

export const ViewDados = () => {

  const [dados, setDados] = useState([]);
  const [consulta, setConsulta] = useState("bolsas");
  const [filtros, setFiltros] = useState(['aluno']);

  const { conjunto: nomeConjuntoDeDados } = useParams();

  console.log(nomeConjuntoDeDados);

  const conjuntoDados = retornarConjuntoDados(nomeConjuntoDeDados)[0];


  useEffect(() => {
    document.title = `${nomeCojuntoDados(nomeConjuntoDeDados)} - Conjunto de Dados - Dados IFPB`;
  }, [])


  return (
    <>
      <div className="wrapper_metadados">
        <Metadados titulo={nomeCojuntoDados(nomeConjuntoDeDados)}
          fonte={conjuntoDados.fonte}
          autor={conjuntoDados.autor}
          mantenedor={conjuntoDados.mantenedor}
          dataAtualizacao={conjuntoDados.ultima_atualizacao}
          dataCriacao={conjuntoDados.data_criacao}
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
