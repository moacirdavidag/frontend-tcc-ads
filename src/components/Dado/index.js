import React from 'react';
import "./style.css";

import { retornarNomeDosCamposDosDadosCorretamente } from '../../services/retornarNomenclaturasCorretas';

export const Dado = (...propriedadesValores) => {

  const propriedades = propriedadesValores[0]["propriedadesValores"];


  return (
    <div className="dado">
      <div className="conteudo scrollbar">
        {
          propriedades.map(propriedade => {
            return(
              <>
                  <p><span className="strong">{retornarNomeDosCamposDosDadosCorretamente(propriedade[0])}:</span> {propriedade[1]}</p>                
              </>
            )
          })
        }
      </div>
    </div>
  )
}
