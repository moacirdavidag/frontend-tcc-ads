import React from 'react';
import conjuntoDados from '../../data/conjuntoDados';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import './style.css';

export const ConjuntoDados = () => {

    const dados = conjuntoDados;

    return (
        <>
            {
                dados.map(conjunto => {
                    return (
                        <div className='conjunto'>
                            <span><FontAwesomeIcon icon={faDatabase} /></span> <span> {conjunto.nome}</span>
                        </div>
                    )
                })
            }
        </>
    )
}
