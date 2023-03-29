import React from 'react';
import "./style.css";

export const Sobre = () => {
  return (
    <div className="sobre_content">
        <h2>Sobre</h2>
        <p>Esta ferramenta de visualização dos dados provenientes do <strong>Portal de Dados 
            do IFPB</strong> juntamente com uma API GraphQL implementada sobre os mesmos
            é fruto do <strong>Trabalho de Conclusão de Curso</strong> do estudante <strong>
                Moacir David de Almeida Gonçalves
            </strong> do 
            <strong> Curso Superior em Tecnologia em Análise e Desenvolvimento de Sistemas</strong>
            pelo <strong>IFPB - Campus Cajazeiras.</strong>
        </p>
        <p>Qualquer sugestão e melhoria, envie um e-mail para Moacir, clicando <a href="mailto:moacirdavidag@gmail.com">aqui.</a></p>
    </div>
  )
}
