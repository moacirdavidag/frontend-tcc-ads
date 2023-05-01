import React from 'react';
import "./style.css";

export const Dado = (...propriedadesValores) => {

  const propriedades = propriedadesValores[0]["propriedadesValores"];


  return (
    <div className="dado">
      <div className="conteudo scrollbar">
        {
          propriedades.map(propriedade => {
            return(
              <>
                  <p><span className="strong">{propriedade[0]}:</span> {propriedade[1]}</p>                
              </>
            )
          })
        }
      </div>
    </div>
  )
}
