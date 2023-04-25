import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <Link to="/"><img src={logo} className="logo_img" alt="IFPB" /></Link>
        </div>
        <div className="nav_links">
            <ul>
                <li>
                    <Link to={"/conjuntos"}>Conjunto de Dados</Link>
                </li>
                <li>
                    <Link to="/sobre">Sobre</Link>
                </li>
            </ul>
        </div>
    </header>
  )
};
