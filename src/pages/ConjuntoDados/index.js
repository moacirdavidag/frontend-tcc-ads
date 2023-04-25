import React from 'react';
import conjuntoDados from '../../data/conjuntoDados';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import { Link, useParams } from 'react-router-dom';

import { nomeCojuntoDados } from '../../services/nomeConjuntoDadosUpperCase';

export const ConjuntoDados = () => {


    const { grupo } = useParams() || null;

    let dados = grupo === undefined ? conjuntoDados : conjuntoDados.filter(conjunto => conjunto.grupo === grupo);

    // if(grupo !== null) {
    //     dados = conjuntoDados.filter(conjunto => conjunto.grupo === grupo)
    // }

    console.log(`Grupo: ${grupo}`)

    return (
        <>
            {
                dados.map(conjunto => {
                    return (
                        <div className='conjunto' key={dados.indexOf(conjunto)}>
                            <Link to={`/dados/${conjunto.nome}`}><span><FontAwesomeIcon icon={faDatabase} /></span> <span> {nomeCojuntoDados(conjunto.nome)}</span></Link>
                        </div>
                    )
                })
            }
        </>
    )
}
