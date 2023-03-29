import React, { useState } from 'react'
import "./style.css";

import { IoSettingsSharp, IoSchool,
  IoLaptopOutline, IoDocumentSharp,
  IoPersonSharp } from "react-icons/io5";

export const Card = ({titulo, quantidade}) => {
  const [icone, setIcone] = useState(titulo);
  switch(icone) {
    case "Administração":
      setIcone(IoSettingsSharp);
      break;
    case "Ensino":
      setIcone(IoSchool);
      break;
    case "Tecnologia da Informação":
      setIcone(IoLaptopOutline);
      break;
    case "Projetos":
      setIcone(IoDocumentSharp);
      break;
    case "Gestão":
      setIcone(IoSettingsSharp);
      break;
    case "Atividades Estudantis":
      setIcone(IoPersonSharp);
      break;
  }
  return (
    <div className="card">
        <span className='icon'>{icone}</span>
        <h3 className="titulo_card">{titulo}</h3>
        <p>{quantidade} Conjunto de Dados</p>
    </div>
  )
}
