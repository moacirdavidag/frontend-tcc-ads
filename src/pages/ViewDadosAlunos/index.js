import React, { useState } from 'react';
import { Metadados } from '../../components/Metadadados';
import { Dado } from '../../components/Dado';

import { FaSearch } from 'react-icons/fa';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { retornarCamposDoConjuntoDeDados } from '../../services/retornarCamposDoConjuntoDeDados';


import { useConsulta } from '../../hooks/useConsulta';

export const ViewDadosAlunos = () => {

    document.title = "Alunos - Conjuntos de Dados - Dados IFPB";

    const camposDaConsulta = retornarCamposDoConjuntoDeDados("alunos");

    // const [dados, setDados] = useState([]);
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

    const { dados, statusConsulta, carregando } = useConsulta(consulta.query, filtro);

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
                <Metadados titulo={"Alunos"} fonte={"http://suap.ifpb.edu.br/api/ensino/alunos/v1/"}
                    autor={"Diretoria-Geral de Tecnologia da Informação"} mantenedor={"dti@ifpb.edu.br"}
                    dataAtualizacao={"4 de Setembro de 2019, 20:41 (UTC-03:00)"}
                    dataCriacao={"1 de Abril de 2019, 12:27 (UTC-03:00)"} />
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
