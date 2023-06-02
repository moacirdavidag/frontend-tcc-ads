module.exports = [
    {
        nome: "campi",
        campos: [
            "cep", "cnpj", "endereco",
            "nome", "sigla", "telefone",
            "url", "uuid"
        ]
    },
    {
        nome: "alunos",
        campos: [
            "cota", "situacao", "matricula",
            "nome", "url", "uuid"
        ]
    },
    {
        nome: "bolsas",
        campos: [
            "aluno", "categoria_bolsa", "setor",
            "valor_bolsa", "url", "uuid"
        ]
    },
    {
        nome: "cursos",
        campos: [
            "ch", "codigo", "coordenador",
            "descricao", "diretoria", "eixo",
            "modalidade", "natureza_participacao",
            "resolucao_criacao", "url", "uuid"
        ]
    },
    {
        nome: "matrizes",
        campos: [
            "ano_criacao", "ch_matriz", "descricao",
            "periodo_criacao", "url", "uuid"
        ]
    },
    {
        nome: "patrimônio",
        campos: [
            "descricao", "estado_conservacao", "numero",
            "situacao", "url", "uuid", "valor_inicial",
            "valor_liquido_contabil"
        ]
    },
    {
        nome: "bolsas",
        campos: [
            "aluno", "categoria_bolsa", "setor",
            "valor_bolsa", "url", "uuid"
        ]
    },
    {
        nome: "projetos de extensão",
        campos: [
            "aprovado", "area_conhecimento", "foco_tecnologico",
            "inicio_execucao", "fim_execucao",
            "justificativa", "resultados_esperados",
            "resumo", "titulo", "uo", "url",
            "valor_total_executado",
            "uuid"
        ]
    },
    {
        nome: "projetos de pesquisa",
        campos: [
            "aprovado", "area_conhecimento", "foco_tecnologico",
            "inicio_execucao", "fim_execucao",
            "justificativa", "resultados_esperados",
            "resumo", "titulo", "uo", "url",
            "valor_total_executado",
            "uuid"
        ]
    },
    {
        nome: "servidores",
        campos: [
            "cargo_emprego", "disciplina_ingresso", "funcao_codigo",
            "jornada_trabalho", 
            "matricula", "nome", 
            "url", "uuid"
        ]
    },
    {
        nome: "setores",
        campos: [
            "is_siape", "nome", "setores_filho",
            "sigla", "superior",  
            "total_servidores", "nome", 
            "url", "uuid"
        ]
    },
    {
        nome: "versões do SUAP",
        campos: [
            "author", "project", "uuid"
        ]
    },
]