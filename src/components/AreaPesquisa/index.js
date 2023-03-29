import React from 'react'
import './style.css';

import {FaSearch} from 'react-icons/fa';

export const AreaPesquisa = () => {
  return (
    <div className="wrapper">
        <h2 className="titulo_area">Pesquisar por dados</h2>
        <div className="input_wrapper">
          <input type="text" 
          name="pesquisaConjunto" className="input_pesquisa" 
          placeholder="Alunos...">
          </input>  
          <FaSearch className="input_icon" />  
        </div>
    </div>
  )
};
