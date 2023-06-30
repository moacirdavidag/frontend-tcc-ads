import React from 'react';
import "./style.css";

import { retornarNomeDosCamposDosDadosCorretamente } from '../../services/retornarNomenclaturasCorretas';

export const Dado = ({ propriedadesValores }) => {
  return (
    <div className="dado">
      <div className="conteudo scrollbar">
        {propriedadesValores.map(([chave, valor]) => {
          if (typeof valor === 'object' && valor !== null) {
            const valores = Object.values(valor);
            return (
              <p key={chave}>
                <span className="strong">{retornarNomeDosCamposDosDadosCorretamente(chave)}:</span> {valores}
              </p>
            )
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