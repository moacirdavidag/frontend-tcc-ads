const retornarNomeDosCamposDosDadosCorretamente = (valor) => {
    switch(valor) {
        case "nome": 
            return "Nome";
        case "cota":
            return "Cota";
        case "situacao":
            return "Situação";
        case "matricula":
            return "Matrícula";
        case "codigo":
            return "Código";
        case "ch":
            return "Carga horária";
        case "coordenador":
            return "Coordenador";
        case "descricao":
            return "Descrição";
        case "diretoria":
            return "Diretoria";
        case "eixo":
            return "Eixo";
        case "modalidade":
            return "Modalidade";
        case "natureza_participação":
            return "Natureza participação";
        case "resolucao_criacao":
            return "Resolução criação";
        default:
            return valor;
    }
}

module.exports = {retornarNomeDosCamposDosDadosCorretamente};