import React, { useState } from 'react';
import { Metadados } from '../../components/Metadadados';
import { Dado } from '../../components/Dado';
import {v4 as uuidv4} from 'uuid';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { retornarConjuntoDeDados } from '../../utils/conjuntoDados';

import { useConsulta } from '../../hooks/useConsulta';

export const ViewDadosVersoesSuap = () => {

    document.title = "Versões do SUAP - Conjuntos de Dados - Dados IFPB";

    const conjuntoDeDado = retornarConjuntoDeDados("versões do SUAP");
    const [campos, setCampos] = useState([]);
    const [offset, setOffset] = useState(0);
    const [filtro, setFiltro] = useState({
        offset
    })

    const consulta = {
        query: `
            query($filtros: InputsVersoes) {
                versoes(filtros: $filtros) {
                    ${campos.join(",")}
                }
            }
        `
    }

    const { dados, statusConsulta, carregando } = useConsulta(consulta.query, "versoes", filtro);

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
                <Metadados titulo={conjuntoDeDado.nome} fonte={conjuntoDeDado.fonte}
                    autor={conjuntoDeDado.autor} mantenedor={conjuntoDeDado.mantenedor}
                    dataAtualizacao={conjuntoDeDado.ultima_atualizacao}
                    dataCriacao={conjuntoDeDado.data_criacao} />
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
                                            <div key={uuidv4()}>
                                                <input type="checkbox" name="nome" value={campo} placeholder={campo} onClick={() => {
                                                    handleCampos(campo);
                                                }} 
                                                defaultChecked={campos.includes(campo)}
                                                />
                                                <label htmlFor={campo}>{campo}</label>
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
