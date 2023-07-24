import React, { useState } from "react";
import { Metadados } from "../../components/Metadadados";
import { Dado } from "../../components/Dado";
import { FaSearch } from "react-icons/fa";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { retornarConjuntoDeDados, limparConsulta } from "../../utils/conjuntoDados";

import { useConsulta } from "../../hooks/useConsulta";

export const ViewDadosSetor = () => {
  document.title = "Setores - Conjuntos de Dados - Dados IFPB";

  const conjuntoDeDado = retornarConjuntoDeDados("setores");
  const [campos, setCampos] = useState([]);
  const [offset, setOffset] = useState(0);
  const [filtro, setFiltro] = useState({
    offset,
    uo: null,
    sigla: null,
    nome: null,
  });

  const consulta = {
    query: `
            query($filtros: InputsSetor) {
                setores(filtros: $filtros) {
                    ${campos.join(",")}
                }
            }
        `,
  };

  const { dados, statusConsulta, carregando } = useConsulta(
    consulta.query,
    "setores",
    filtro
  );

  const handleCampos = (nomeCampo) => {
    if (nomeCampo === "superior") {
      if (campos.includes("superior { nome }")) {
        setCampos(campos.filter((campo) => campo !== "superior { nome }"));
      } else {
        setCampos([...campos, "superior { nome }"]);
      }
      return;
    }

    if (nomeCampo === "uo") {
      if (campos.includes("unidade_organizacional { nome }")) {
        setCampos(
          campos.filter((campo) => campo !== "unidade_organizacional { nome }")
        );
      } else {
        setCampos([...campos, "unidade_organizacional { nome }"]);
      }
      return;
    }

    if (campos.includes(nomeCampo)) {
      setCampos(campos.filter((campo) => campo !== nomeCampo));
    } else {
      setCampos([...campos, nomeCampo]);
    }
  };

  return (
    <>
      <div className="wrapper_metadados">
        <Metadados
          titulo={conjuntoDeDado.nome}
          fonte={conjuntoDeDado.fonte}
          autor={conjuntoDeDado.autor}
          mantenedor={conjuntoDeDado.mantenedor}
          dataAtualizacao={conjuntoDeDado.ultima_atualizacao}
          dataCriacao={conjuntoDeDado.data_criacao}
        />
      </div>
      <div className="wrapper_filtros">
        <div className="componente">
          <span className="enfase">Buscar</span>
          <div className="input_icon_wrapper">
            <input
              type="text"
              name="busca"
              className="input border_radius"
              placeholder="Nome do setor"
              onChange={(e) => {
                let nomeSetor =
                  e.target.value === "null" ? null : e.target.value;
                setFiltro((prevState) => ({ ...prevState, nome: nomeSetor }));
              }}
            />
            <FaSearch className="input_icon" />
          </div>
        </div>
        <div className="componente">
          <span className="enfase">Sigla</span>
          <input
            type="text"
            placeholder="Sigla"
            className={"input"}
            onChange={(e) => {
              let sigla =
                e.target.value !== null && e.target.value !== ""
                  ? e.target.value
                  : null;
              setFiltro((prevState) => ({ ...prevState, sigla }));
            }}
          />
        </div>
        <div className="componente">
          <span className="enfase">Campus</span>
          <input
            type="text"
            placeholder="Campus"
            className={"input"}
            onChange={(e) => {
              let uo =
                e.target.value !== null && e.target.value !== ""
                  ? e.target.value
                  : null;
              setFiltro((prevState) => ({ ...prevState, uo }));
            }}
          />
        </div>
        <div className="acoes-btn">
          <button
            className="btn_filtro"
            onClick={() => {
              //handleQuery();
            }}
          >
            Aplicar
          </button>
          <button
            className="btn_filtro"
            onClick={() => {
              limparConsulta(filtro);
              setCampos([]);
            }}
          >
            Resetar
          </button>
        </div>
      </div>
      <div className="wrapper_dados">
        <div className="area_campos">
          <div className="campos scrollbar">
            <span className="enfase">Campos</span>
            <div className="campos scrollbar">
              <form>
                {conjuntoDeDado.campos.map((campo) => {
                  return (
                    <div>
                      <input
                        type="checkbox"
                        name="nome"
                        value={campo}
                        placeholder={campo}
                        onClick={() => {
                          handleCampos(campo);
                        }}
                        defaultChecked={campos.includes(campo)}
                      />
                      <label htmlFor={campo}>{campo}</label>
                    </div>
                  );
                })}
              </form>
            </div>
          </div>
        </div>
        <div className="dados">
          {carregando && (
            <div className="info-wrapper">
              <div className="loader"></div>
              <p>Carregando...</p>
            </div>
          )}
          {!statusConsulta && campos.length !== 0 && (
            <div className="info-wrapper">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <p>Ocorreu um erro! Tente novamente!</p>
            </div>
          )}
          {statusConsulta && dados.length === 0 && (
            <div className="info-wrapper">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <p>Nenhum resultado para a pesquisa foi encontrado.</p>
            </div>
          )}
          {campos.length === 0 && (
            <div className="info-wrapper">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <p>Selecione os campos para a consulta!</p>
            </div>
          )}
          {statusConsulta &&
            dados.map((dado) => {
              return (
                <Dado
                  key={dados.indexOf(dado)}
                  propriedadesValores={Object.entries(dado)}
                />
              );
            })}
          {statusConsulta && dados.length !== 0 && (
            <>
              <button
                className={
                  offset <= 0 ? "paginacao-btn-disabled" : "paginacao-btn"
                }
                onClick={() => {
                  setOffset(offset > 0 ? offset - 11 : 0);
                  setFiltro((prevState) => ({
                    ...prevState,
                    offset,
                  }));
                }}
              >
                Anterior
              </button>
              <button
                className={"paginacao-btn"}
                onClick={() => {
                  setOffset(offset + 11);
                  setFiltro((prevState) => ({
                    ...prevState,
                    offset,
                  }));
                }}
              >
                Próximo
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
