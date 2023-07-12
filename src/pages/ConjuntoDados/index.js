import React from 'react';
import conjuntoDeDados from '../../utils/conjuntoDados';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import { Link, useParams } from 'react-router-dom';

import { nomeCojuntoDados } from '../../utils/conjuntoDados';

export const ConjuntoDados = () => {


    const { grupo } = useParams() || null;

    let dados = grupo === undefined ? conjuntoDeDados : conjuntoDeDados.filter(conjunto => conjunto.grupo === grupo);


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
