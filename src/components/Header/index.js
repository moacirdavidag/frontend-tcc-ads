import React from 'react';
import logo from '../../assets/images/logo.png';
import './style.css';

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <a href="/"><img src={logo} className="logo_img" alt="IFPB" /></a>
        </div>
        <div className="nav_links">
            <ul>
                <li>
                    <a href="/dados">Conjunto de Dados</a>
                </li>
                <li>
                    <a href="/grupos">Grupos</a>
                </li>
                <li>
                    <a href="/sobre">Sobre</a>
                </li>
            </ul>
        </div>
    </header>
  )
};
