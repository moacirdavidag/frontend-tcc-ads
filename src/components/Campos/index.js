import React from 'react';
import "./style.css";

export const Campos = () => {
  return (
    <div className="campos scrollbar">
        <form>
            <div>
                <input type="checkbox" name="nome" value={"nome"} placeholder="Nome" />
                <label for="nome">Nome</label>
            </div>
        </form>
    </div>
  )
}
