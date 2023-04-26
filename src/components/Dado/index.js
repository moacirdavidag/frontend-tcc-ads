import React from 'react';
import "./style.css";

export const Dado = (...propriedades) => {
  return (
    <div className="dado">
        <div className="conteudo scrollbar">
            {propriedades.map(propriedade => {
                <p><span className="strong">{propriedade}</span> Pessoa Tal</p>
            })}
        </div>
    </div>
  )
}
