import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid';
import { Metadados } from '../../components/Metadadados';
import { Dado } from '../../components/Dado';

import { FaSearch } from 'react-icons/fa';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useConsulta } from '../../hooks/useConsulta';
import { retornarConjuntoDeDados } from '../../services/conjuntoDados';

export const ViewDadosAlunos = () => {

    document.title = "Alunos - Conjuntos de Dados - Dados IFPB";

    const conjuntoDeDado = retornarConjuntoDeDados("alunos");
    const [campos, setCampos] = useState([]);
    const [offset, setOffset] = useState(0);
    const [filtro, setFiltro] = useState({
        offset,
        cota: null,
        curso: null,
        situacao: null,
        nome: null,
        matricula: null
    })

    const consulta = {
        query: `
        query($filtros: InputsAluno) {
          alunos(filtros: $filtros) {
            ${campos.join(",")}
          }
        }
      `
    }

    const { dados, statusConsulta, carregando } = useConsulta(consulta.query, "alunos", filtro);


    const handleCampos = (nomeCampo) => {
        if (nomeCampo === 'curso') {
            if (campos.includes('curso { nome }')) {
                setCampos(campos.filter(campo => campo !== 'curso { nome }'));
            } else {
                setCampos([...campos, 'curso { nome }']);
            }
            return;
        }

        if (campos.includes(nomeCampo)) {
            setCampos(campos.filter(campo => campo !== nomeCampo));
        } else {
            setCampos([...campos, nomeCampo]);
        }
    };

    console.log(campos)
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
                    <span className="enfase">Buscar</span>
                    <div className="input_icon_wrapper">
                        <input type="text" name="busca"
                            className="input border_radius"
                            placeholder="Nome do aluno"
                            onChange={(e) => {
                                let nomeAluno = e.target.value === 'null' ? null : e.target.value;
                                setFiltro((prevState) => ({ ...prevState, nome: nomeAluno }));
                            }} />
                        <FaSearch className="input_icon" />
                    </div>
                </div>
                <div className="componente">
                    <span className="enfase">Cota</span>
                    <select className="input" onChange={(e) => {
                        let opcaoCota = e.target.value === 'null' ? null : e.target.value;
                        setFiltro((prevState) => ({ ...prevState, cota: opcaoCota }));
                    }}>
                        <option value="null">SELECIONAR</option>
                        <option value="ESCOLA_PUBLICA">Oriundo de escola pública</option>
                        <option value="ESCOLA_PUBLICA_PPI">Oriundo de escola pública, declarado PPI</option>
                    </select>
                </div>
                <div className="componente">
                    <span className="enfase">Situação</span>
                    <select className="input" onChange={(e) => {
                        let opcaoSituacao = e.target.value === 'null' ? null : e.target.value;
                        setFiltro((prevState) => ({ ...prevState, situacao: opcaoSituacao }));
                    }}>
                        <option value="null">SELECIONAR</option>
                        <option value="CANCELADO">Cancelado</option>
                        <option value="CANCELAMENTO_COMPULSORIO">Cancelamento Compulsório</option>
                        <option value="CONCLUIDO">Concluído</option>
                        <option value="EVASAO">Evasão</option>
                        <option value="FORMADO">Formado</option>
                        <option value="MATRICULADO">Matriculado</option>
                        <option value="TRANSFERIDO">Transferido</option>
                        <option value="TRANSFERIDO_EXTERNO">Transferido Externo</option>
                        <option value="TRANCADO">Trancado</option>
                        <option value="TRANCADO_VOLUNTARIAMENTE">Trancado Voluntariamente</option>
                    </select>
                </div>
                <div className="componente">
                    <span className="enfase">Matrícula</span>
                    <input type="text" className="input" placeholder='Matrícula' onChange={(e) => {
                        let matricula = e.target.value;
                        setFiltro((prevState) => ({ ...prevState, matricula: matricula || null }));
                    }} />
                </div>
                <div className="componente">
                    <span className="enfase">Curso</span>
                    <input type="text" className="input" placeholder="Nome" onChange={(e) => {
                        let curso = e.target.value;
                        setFiltro((prevState) => ({ ...prevState, curso: curso || null }));
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
                                            <div key={uuidv4()}>
                                                <input type="checkbox" name="nome"
                                                    value={campo} placeholder={campo}
                                                    onClick={() => {
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
