import React, { useEffect, useState } from 'react';
import style from './style.css';
import { AreaPesquisa } from '../../components/AreaPesquisa/index';
import { useSearchParams, Link } from "react-router-dom";
import { buscaConjuntoDeDados, nomeCojuntoDados } from '../../utils/conjuntoDados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const BuscaConjuntoDados = () => {

    const [searchParams] = useSearchParams();

    const [resultado, setResultado] = useState([]);


    useEffect(() => {
        const nome = searchParams.toString().split("=")[1];
        const conjuntos = buscaConjuntoDeDados(nome);
        setResultado(conjuntos);
    }, [searchParams]);

  return (
    <>
        <AreaPesquisa />
        <div className="resultados_busca">
            {resultado.length > 0 && <>Foram encontrados {resultado.length} resultados para a busca</>}
            {resultado.length === 0 && <>Não foram encontrados resultados para a busca</>}
        </div>

        {
                resultado.map(conjunto => {
                    return (
                        <div className='conjunto' key={resultado.indexOf(conjunto)}>
                            <Link to={`/dados/${conjunto.nome}`}><span><FontAwesomeIcon icon={faDatabase} /></span> <span> {nomeCojuntoDados(conjunto.nome)}</span></Link>
                        </div>
                    )
                })
            }

    </>
  )
}

export default BuscaConjuntoDados;