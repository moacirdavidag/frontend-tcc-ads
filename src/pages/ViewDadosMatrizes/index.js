import React, { useState } from 'react';
import { Metadados } from '../../components/Metadadados';
import { Dado } from '../../components/Dado';

import { FaSearch } from 'react-icons/fa';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { retornarCamposDoConjuntoDeDados } from '../../services/retornarCamposDoConjuntoDeDados';


import { useConsulta } from '../../hooks/useConsulta';

export const ViewDadosMatrizes = () => {

    document.title = "Matrizes - Conjuntos de Dados - Dados IFPB";

    const camposDaConsulta = retornarCamposDoConjuntoDeDados("matrizes");

    const [campos, setCampos] = useState([]);
    const [offset, setOffset] = useState(0);
    const [filtro, setFiltro] = useState({
        offset,
        curso: null
    })

    const consulta = {
        query: `
            query($filtros: InputsMatrizCurso) {
                matrizes (filtros: $filtros) {
                    ${campos.join(",")}
                }
            }
        `
    }

    const { dados, statusConsulta, carregando } = useConsulta(consulta.query, "matrizes", filtro);

    const handleCampos = (nomeCampo) => {
        if (!campos.includes(nomeCampo)) {
            setCampos([...campos, nomeCampo]);
        } else {
            let index = campos.indexOf(nomeCampo);
            let novoArrayDeCampos = campos.splice(index, 1);
            setCampos(campos.splice(novoArrayDeCampos));
        }
    }


    return (
        <>
            <div className='wrapper_metadados'>
                <Metadados titulo={"Matrizes"} fonte={"http://suap.ifpb.edu.br/api/ensino/matrizes/v1/"}
                    autor={"Diretoria-Geral de Tecnologia da Informação"} mantenedor={"dti@ifpb.edu.br"}
                    dataAtualizacao={"4 de Setembro de 2019, 20:42 (UTC-03:00)"}
                    dataCriacao={"1 de Abril de 2019, 12:29 (UTC-03:00)"} />
            </div>
            <div className="wrapper_filtros">
                <div className="componente">
                    <span className="enfase">Buscar</span>
                    <div className="input_icon_wrapper">
                        <input type="text" name="busca"
                            className="input border_radius"
                            placeholder="Nome do curso"
                            onChange={(e) => {
                                let nomeCurso = e.target.value === 'null' ? null : e.target.value;
                                setFiltro((prevState) => ({ ...prevState, curso: nomeCurso }));
                            }} />
                        <FaSearch className="input_icon" />
                    </div>
                </div>
                {/* <div className="componente">
                    <span className="enfase">Ordem</span>
                    <select className="input" onChange={(e) => {
                        setOrdem(e.target.value);
                    }}>
                        <option value="cres">Crescente</option>
                        <option value="desc">Descrescente</option>
                    </select>
                </div> */}
                <div className='acoes-btn'>
                    <button className="btn_filtro" onClick={() => {
                        //handleQuery();
                    }}>
                        Aplicar
                    </button>
                    <button className="btn_filtro">
                        Resetar
                    </button>
                </div>
            </div>
            <div className="wrapper_dados">
                <div className="area_campos">
                    <div className="campos scrollbar">
                        <div className="campos scrollbar">
                            <form>
                                {
                                    camposDaConsulta.map(campo => {
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
                    {!statusConsulta && campos.length !== 0 &&
                        <div className="info-wrapper">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <p>Ocorreu um erro! Tente novamente!</p>
                        </div>
                    }
                    {statusConsulta && dados.length === 0 &&
                        <div className="info-wrapper">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <p>Nenhum resultado para a pesquisa foi encontrado.</p>
                        </div>
                    }
                    {campos.length === 0 &&
                        <div className="info-wrapper">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <p>Selecione os campos para a consulta!</p>
                        </div>
                    }
                    {
                        statusConsulta && (
                            dados.map((dado) => {
                                return <Dado key={dados.indexOf(dado)} propriedadesValores={Object.entries(dado)} />
                            })
                        )
                    }
                    {
                        statusConsulta && dados.length !== 0 &&
                        <>
                            <button className={offset > 0 ? "paginacao-btn" : "paginacao-btn-disabled"}
                                onClick={() => (
                                    setOffset(offset > 0 ? offset - 11 : 0)
                                )}>Anterior</button>
                            <button className={"paginacao-btn"} onClick={() => (
                                setOffset(offset + 11)
                            )}>Próximo</button>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
