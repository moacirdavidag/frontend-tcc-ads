import React from 'react';
import "./style.css";

import {FaSearch} from 'react-icons/fa';

export const AreaFiltros = () => {
  return (
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
    </div>
  )
}
