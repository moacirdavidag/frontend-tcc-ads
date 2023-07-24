import React from "react";
import "./style.css";

export const Metadados = ({
  titulo,
  fonte,
  autor,
  mantenedor,
  dataAtualizacao,
  dataCriacao,
}) => {
  const letrasMaiusculas = (palavra) =>
    palavra.replace(/\b\w/gu, (caractere) => caractere.toUpperCase());

  return (
    <div className="metadados">
      <h2>{letrasMaiusculas(titulo)}</h2>
      <p>
        <span className="enfase">Informações adicionais:</span>
      </p>
      <p>
        <span className="enfase">Fonte:</span> <a href={fonte}>{fonte}</a>
      </p>
      <p>
        <span className="enfase">Autor:</span> {autor}
      </p>
      <p>
        <span className="enfase">Mantenedor:</span> {mantenedor}
      </p>
      <p>
        <span className="enfase">Última atualização:</span> {dataAtualizacao}
      </p>
      <p>
        <span className="enfase">Criado em:</span> {dataCriacao}
      </p>
    </div>
  );
};
