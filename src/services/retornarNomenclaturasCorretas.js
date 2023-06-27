const retornarNomeDosCamposDosDadosCorretamente = (valor) => {
    switch (valor) {
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
        case "cep":
            return "CEP";
        case "cnpj":
            return "CNPJ";
        case "endereco":
            return "Endereço";
        case "telefone":
            return "Telefone";
        case "sigla":
            return "Sigla";
        case "estado_conservacao":
            return "Estado de conservação";
        case "numero":
            return "Número";
        case "valor_inicial":
            return "Valor inicial (R$)";
        case "valor_liquido_contabil":
            return "Valor líquido contábil (R$)";
        case "jornada_trabalho":
            return "Jornada de trabalho";
        case "cargo_emprego":
            return "Cargo / Emprego";
        case "disciplina_ingresso":
            return "Disciplina Ingresso";
        case "funcao_codigo":
            return "Código da função";
        case "is_siape":
            return "É SIAPE";
        case "total_servidores":
            return "Total de servidores";
        case "aprovado":
            return "Aprovado";
        case "area_conhecimento":
            return "Área / conhecimento";
        case "foco_tecnologico":
            return "Foco tecnológico";
        case "inicio_execucao":
            return "Início da execução";
        case "fim_execucao":
            return "Fim da execução";
        case "justificativa":
            return "Justificativa";
        case "resumo":
            return "Resumo";
        case "resultados_esperados":
            return "Resultados esperados";
        case "valor_total_executado":
            return "Valor total executado (R$)";
        case "titulo":
            return "Título";
        default:
            return valor;
    }
}

module.exports = { retornarNomeDosCamposDosDadosCorretamente };