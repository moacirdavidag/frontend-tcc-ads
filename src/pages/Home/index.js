import React from "react";
import { AreaPesquisa } from '../../components/AreaPesquisa';
import './style.css';   
import { Card } from "../../components/Card";

export const Home = () => {
    return(
        <>
            <AreaPesquisa />
            <div className="cards_wrapper">
                <Card titulo={"Administração"} quantidade={1} />
                <Card titulo={"Atividades Estudantis"} quantidade={1} />
                <Card titulo={"Ensino"} quantidade={2} />
                <Card titulo={"Gestão"} quantidade={3} />
                <Card titulo={"Projetos"} quantidade={2} />
                <Card titulo="Tecnologia da Informação" quantidade={1} />
            </div>
        </>
    )
};