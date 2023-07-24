import React from "react";
import "./style.css";

import { retornarNomeDosCamposDosDadosCorretamente } from "../../utils/retornarNomenclaturasCorretas";
import { v4 as uuidv4 } from "uuid";

export const Dado = ({ propriedadesValores }) => {
  return (
    <div className="dado">
      <div className="conteudo scrollbar">
        {propriedadesValores.map(([chave, valor]) => {
          if (Array.isArray(valor)) {
            const valores = valor.map((item) => Object.values(item));
            return (
              <>
                <span className="strong">
                  {retornarNomeDosCamposDosDadosCorretamente(chave)}:
                </span>
                {valores.map((valor) => (
                  <p
                    key={uuidv4()}
                    style={{
                      backgroundColor:
                        valores.indexOf(valor) % 2 === 0 ? "#F0EFEF" : "none",
                    }}
                  >
                    {valor}
                  </p>
                ))}
              </>
            );
          } else if (typeof valor === "object" && valor !== null) {
            const valores = Object.values(valor);

            return (
              <>
                <span className="strong">
                  {retornarNomeDosCamposDosDadosCorretamente(chave)}:
                </span>
                {valores.map((valor) => (
                  <p key={uuidv4()}>{valor}</p>
                ))}
              </>
            );
          } else {
            return (
              <p key={uuidv4()}>
                <span className="strong">
                  {retornarNomeDosCamposDosDadosCorretamente(chave)}:
                </span>{" "}
                {typeof valor === "boolean" && valor === true && <>Sim</>}
                {typeof valor === "boolean" && valor === false && <>Não</>}
                {valor !== null ? valor : "Não informado"}
              </p>
            );
          }
        })}
      </div>
    </div>
  );
};
