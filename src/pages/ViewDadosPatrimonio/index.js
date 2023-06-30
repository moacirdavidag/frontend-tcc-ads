import React, { useState } from 'react';
import { Metadados } from '../../components/Metadadados';
import { Dado } from '../../components/Dado';

import { FaSearch } from 'react-icons/fa';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { retornarConjuntoDeDados } from '../../services/conjuntoDados';

import { useConsulta } from '../../hooks/useConsulta';

export const ViewDadosPatrimonio = () => {

    document.title = "Patrimônio - Conjuntos de Dados - Dados IFPB";

    const conjuntoDeDado = retornarConjuntoDeDados("patrimônio");
    const [campos, setCampos] = useState([]);
    const [offset, setOffset] = useState(0);
    const [filtro, setFiltro] = useState({
        offset,
        campus: null,
        numero: null,
    })

    const consulta = {
        query: `
            query($filtros: InputsPatrimonio) {
                patrimonio(filtros: $filtros) {
                    ${campos.join(",")}
                }
            }
        `
    }

    const { dados, statusConsulta, carregando } = useConsulta(consulta.query, "patrimonio", filtro);

    const handleCampos = (nomeCampo) => {
        let novoCampo = nomeCampo;
        if (!campos.includes(nomeCampo) && !campos.includes(`campus { nome }`)) {
            if (novoCampo === 'campus') {
                novoCampo = 'campus { nome }';
            }
            setCampos([...campos, novoCampo]);
        } else {
            if (nomeCampo === 'campus') {
                setCampos(campos.filter(campo => campo !== 'campus { nome }'));
            } else {
                setCampos(campos.filter(campo => campo !== nomeCampo));
            }
        }
    };


    return (
        <>
            <div className='wrapper_metadados'>
                <Metadados titulo={conjuntoDeDado.nome} fonte={conjuntoDeDado.fonte}
                    autor={conjuntoDeDado.autor} mantenedor={conjuntoDeDado.mantenedor}
                    dataAtualizacao={conjuntoDeDado.ultima_atualizacao}
                    dataCriacao={conjuntoDeDado.data_criacao} />
            </div>
            <div className="wrapper_filtros">
                <div className="componente">
                    <span className="enfase">Buscar por campus</span>
                    <div className="input_icon_wrapper">
                        <input type="text" name="busca"
                            className="input border_radius"
                            placeholder="Nome do campus"
                            onChange={(e) => {
                                let campus = e.target.value !== null && e.target.value !== '' ? e.target.value : null;
                                setFiltro((prevState) => ({ ...prevState, campus }));
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

                <div className="componente">
                    <span className="enfase">Número</span>
                    <input type="number" className="input" placeholder='Número' onChange={(e) => {
                        let numero = parseInt(e.target.value);
                        setFiltro((prevState) => ({ ...prevState, numero }));
                    }} />
                </div>
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
                        <span className='enfase'>Campos</span>
                        <div className="campos scrollbar">
                            <form>
                                {
                                    conjuntoDeDado.campos.map(campo => {
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
                        statusConsulta && dados.length !== 0 && (
                            <>
                                <button
                                    className={offset <= 0 ? "paginacao-btn-disabled" : "paginacao-btn"}
                                    onClick={() => {
                                        setOffset(offset > 0 ? offset - 11 : 0);
                                        setFiltro((prevState) => ({
                                            ...prevState,
                                            offset
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
                                            offset
                                        }));
                                    }}
                                >
                                    Próximo
                                </button>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}
