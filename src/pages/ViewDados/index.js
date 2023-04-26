import React, { useEffect, useState } from 'react';
import "./style.css";
import { Metadados } from '../../components/Metadadados';
import { AreaFiltros } from '../../components/AreaFiltros';
import { Dado } from '../../components/Dado';
import { Campos } from '../../components/Campos';
import { useParams } from 'react-router-dom';

import { retornarConjuntoDados } from '../../services/metadadosConjunto';
import { nomeCojuntoDados } from '../../services/nomeConjuntoDadosUpperCase';
import { url } from '../../services/api';

export const ViewDados = () => {

  const { conjunto: nomeConjuntoDeDados } = useParams();

  const [dados, setDados] = useState([]);
  const [consulta, setConsulta] = useState(nomeConjuntoDeDados);
  const [offset, setOffset] = useState(0);
  const [filtros, setFiltros] = useState(["uuid", "cep"]);
  const [carregando, isCarregando] = useState(false);

  const conjuntoDados = retornarConjuntoDados(nomeConjuntoDeDados)[0];

  useEffect(() => {
    document.title = `${nomeCojuntoDados(nomeConjuntoDeDados)} - Conjunto de Dados - Dados IFPB`;
  }, [])

  const handleQuery = async (consulta, offset = 0, ...filtros) => {
    console.log(consulta, filtros)
    try {
      isCarregando(true);
      const query = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
          query {
            ${consulta} {
              ${filtros.toString()}
            }
          }
        `
        })
      });
      const res = await query.json();
      console.log(res.data[`${consulta}`])
      setDados(res.data[`${consulta}`]);
      isCarregando(false);
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(() => {
    handleQuery(consulta, offset, filtros);
  }, [consulta, offset, filtros])


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
          {carregando &&
            <div className="loader-wrapper">
              <div className="loader">
              </div>
              <p>Carregando...</p>
            </div>
          }
          {
            dados.map((dado) => {
              return <Dado key={dado.uuid} propriedadesValores={Object.entries(dado)} />
            })
          }
        </div>
      </div>
    </>
  );
};
