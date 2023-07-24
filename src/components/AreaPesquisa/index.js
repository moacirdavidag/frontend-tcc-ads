import React, { useRef, useState } from 'react'
import './style.css';

import {FaSearch} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const AreaPesquisa = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [busca, setBusca] = useState('');

  const handleBusca = (e) => {
    e.preventDefault();

    const formBusca = formRef.current;

    navigate(`/busca/?conjunto=${busca}`);

  }

  return (
    <div className="wrapper">
        <h2 className="titulo_area">Pesquisar por dados</h2>
        <form id="buscaPorConjuntoDeDados" ref={formRef}
        onSubmit={handleBusca}>
          <div className="input_wrapper">
            <input type="text" 
            name="conjunto" className="input_pesquisa" 
            placeholder='Alunos...'
            onChange={(e) => {
              setBusca(e.target.value);
            }}>
            </input>  
            <FaSearch className="input_icon" />  
          </div>
        </form>
    </div>
  )
};
