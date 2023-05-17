import React, { useEffect, useState } from 'react';
import "./style.css";
import { Metadados } from '../../components/Metadadados';
import { AreaFiltros } from '../../components/AreaFiltros';
import { Dado } from '../../components/Dado';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

import { retornarConjuntoDados } from '../../services/metadadosConjunto';
import { nomeCojuntoDados } from '../../services/nomeConjuntoDadosUpperCase';
import { retornarCamposDoConjuntoDeDados } from '../../services/retornarCamposDoConjuntoDeDados';
import { url } from '../../services/api';


export const ViewDados = () => {

  const { conjunto: nomeConjuntoDeDados } = useParams();
  const campos = retornarCamposDoConjuntoDeDados(nomeConjuntoDeDados);

  const [dados, setDados] = useState([]);
  const [consulta, setConsulta] = useState(nomeConjuntoDeDados);
  const [statusConsulta200, setStatusConsulta200] = useState(true);
  const [offset, setOffset] = useState(0);
  const [campo, setCampos] = useState([]);
  const [carregando, isCarregando] = useState(false);

  const conjuntoDados = retornarConjuntoDados(nomeConjuntoDeDados)[0];

  useEffect(() => {
    document.title = `${nomeCojuntoDados(nomeConjuntoDeDados)} - Conjunto de Dados - Dados IFPB`;
  }, []);

 
  const handleQuery = async (consulta, ...campos) => {
    
    try {
      isCarregando(true);
      const query = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: `
            query($offset: Int, $limit: Int) {
              ${consulta}(offset: $offset, limit: $limit) {
                ${campos.join('\n')}
              }
            }
          `,
          variables: {
            offset,
            limit: 10
          }
        }),
      });
      if (query.status === 400) {
        isCarregando(false);
        setStatusConsulta200(false);
      }
      const res = await query.json();
      setDados(res.data[`${consulta}`]);
      setStatusConsulta200(true);
      isCarregando(false);
    } catch (error) {
      isCarregando(false);
      setDados([]);
      setStatusConsulta200(false);
      console.log(error.message);
    }
  }

  const handleCampos = (nomeCampo) => {
    if (!campo.includes(nomeCampo)) {
      setCampos([...campo, nomeCampo]);
    } else {
      let index = campo.indexOf(nomeCampo);
      let novoArrayDeCampos = campo.splice(index, 1);
      setCampos(campo.splice(novoArrayDeCampos));
    }
  }

  useEffect(() => {
    handleQuery(consulta, campo);
  }, [consulta, offset, campo]);


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
            <div className="campos scrollbar">
              <form>
                {
                  campos.map(campo => {
                    return (
                      <div>
                        <input type="checkbox" name="nome" value={campo} placeholder={campo} onClick={() => {
                          handleCampos(campo);
                        }} />
                        <label for={campo}>{campo}</label>
                      </div>
                    )
                  })
                }


              </form>
            </div>
          </div>
        </div>
        <div className="dados">
          {carregando &&
            <div className="info-wrapper">
              <div className="loader">
              </div>
              <p>Carregando...</p>
            </div>
          }
          {!statusConsulta200 && campo.length !== 0 &&
            <div className="info-wrapper">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <p>Ocorreu um erro! Tente novamente!</p>
            </div>
          }
          {campo.length === 0 &&
            <div className="info-wrapper">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <p>Selecione os campos para a consulta!</p>
            </div>
          }
          {
            statusConsulta200 && (
              dados.map((dado) => {
                return <Dado key={dados.indexOf(dado)} propriedadesValores={Object.entries(dado)} />
              })
            )
          }
          <button onClick={() => (
            setOffset(offset - 11)
          )}>Anterior</button>
          <button onClick={() => (
            setOffset(offset + 11)
          )}>Próximo</button>
        </div>
      </div>
    </>
  );
};
