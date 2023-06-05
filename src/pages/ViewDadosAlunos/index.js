import React, { useState, useEffect } from 'react';
import { Metadados } from '../../components/Metadadados';
import { Dado } from '../../components/Dado';

import { FaSearch } from 'react-icons/fa';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { retornarCamposDoConjuntoDeDados } from '../../services/retornarCamposDoConjuntoDeDados';

import { url } from '../../services/api';

export const ViewDadosAlunos = () => {

    document.title = "Alunos - Conjuntos de Dados - Dados IFPB";

    const camposDaConsulta = retornarCamposDoConjuntoDeDados("alunos");

    const [dados, setDados] = useState([]);
    const [campos, setCampos] = useState([]);
    const [offset, setOffset] = useState(0);
    const [statusConsulta, setStatusConsulta] = useState();
    const [carregando, setCarregando] = useState();

    // filtros

    const [cota, setCota] = useState(null);
    const [situacao, setSituacao] = useState(null);

    const handleQuery = async (...campos) => {

        try {
            setCarregando(true);
            const query = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    query: `
                query($filtros: InputsAluno) {
                  alunos(filtros: $filtros) {
                    ${campos.join('\n')}
                  }
                }
              `,
                    variables: {
                        filtros: {
                            filtro: {
                                offset,
                                limit: 11,
                                curso: null,
                                cota,
                                matricula: null,
                                situacao
                            }
                        }
                    }
                }),
            });
            if (query.status === 400) {
                setCarregando(false);
                setStatusConsulta(false);
            }
            const res = await query.json();
            setDados(res.data["alunos"]);
            setStatusConsulta(true);
            setCarregando(false);
        } catch (error) {
            setCarregando(false);
            setDados([]);
            setStatusConsulta(false);
            console.log(error.message);
        }
    }

    const handleCampos = (nomeCampo) => {
        if (!campos.includes(nomeCampo)) {
            setCampos([...campos, nomeCampo]);
        } else {
            let index = campos.indexOf(nomeCampo);
            let novoArrayDeCampos = campos.splice(index, 1);
            setCampos(campos.splice(novoArrayDeCampos));
        }
    }


    useEffect(() => {
        handleQuery(campos);
    }, [offset, campos, cota, situacao]);

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
                            placeholder="Buscar" />
                        <FaSearch className="input_icon" />
                    </div>
                </div>
                <div className="componente">
                    <span className="enfase">Ordem</span>
                    <select className="input">
                        <option value="cres">Crescente</option>
                        <option value="desc">Descrescente</option>
                    </select>
                </div>
                <div className="componente">
                    <button className="btn_filtro">
                        Aplicar
                    </button>
                </div>
                <div className="componente">
                    <button className="btn_filtro">
                        Resetar
                    </button>
                </div>
                <div className="componente">
                    <span className="enfase">Cota</span>
                    <select className="input" onChange={(e) => {
                        let opcaoCota = e.target.value === "null" ? null : e.target.value;
                        setCota(opcaoCota);
                    }}>
                        <option value="null">SELECIONAR</option>
                        <option value="ESCOLA_PUBLICA">Oriundo de escola pública</option>
                        <option value="ESCOLA_PUBLICA_PPI">Oriundo de escola pública, declarado PPI</option>
                    </select>
                </div>
                <div className="componente">
                    <span className="enfase">Situação</span>
                    <select className="input" onChange={(e) => {
                        let opcaoSituacao = e.target.value === "null" ? null : e.target.value;
                        setSituacao(opcaoSituacao);
                    }}>
                        <option value="null">SELECIONAR</option>
                        <option value="CANCELADO">Cancelado</option>
                        <option value="CANCELAMENTO_COMPULSORIO">Cancelamento Compulsório</option>
                    </select>
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
                    {campos.length === 0 &&
                        <div className="info-wrapper">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                            <p>Selecione os campos para a consulta!</p>
                        </div>
                    }
                    {
                        statusConsulta && (
                            dados.map((dado) => {
                                return <Dado key={dado.uuid} propriedadesValores={Object.entries(dado)} />
                            })
                        )
                    }
                    {
                        statusConsulta &&
                        <><button onClick={() => (
                            setOffset(offset > 0 ? offset - 11 : 0)
                        )}>Anterior</button><button onClick={() => (
                            setOffset(offset + 11)
                        )}>Próximo</button></>
                    }
                </div>
            </div>
        </>
    )
}
