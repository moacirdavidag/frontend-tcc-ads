import React from 'react';
import "./style.css";

import { retornarNomeDosCamposDosDadosCorretamente } from '../../services/retornarNomenclaturasCorretas';

export const Dado = ({ propriedadesValores }) => {
  return (
    <div className="dado">
      <div className="conteudo scrollbar">
        {propriedadesValores.map(([chave, valor]) => {
          if (typeof valor === 'object' && valor !== null) {
            let objeto = Object.entries(valor)[0];
            // objeto.map(([propriedade, valorPropriedade]) => {
            //   return (
            //     <p key={chave}>
            //       <span className="strong">{retornarNomeDosCamposDosDadosCorretamente(propriedade)}:</span> {valorPropriedade}
            //     </p>
            //   );
            // })  
          } else {
            return (
              <p key={chave}>
                <span className="strong">{retornarNomeDosCamposDosDadosCorretamente(chave)}:</span> {valor}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};