const conjuntoDeDados = [
    {
        nome: "alunos",
        grupo: "ensino",
        fonte: "http://suap.ifpb.edu.br/api/ensino/alunos/v1/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "4 de Setembro de 2019, 20:41 (UTC-03:00)",
        data_criacao: "1 de Abril de 2019, 12:27 (UTC-03:00)",
        campos: [
            "cota", "situacao", "matricula",
            "nome", "url", "uuid", "curso"
        ]
    },
    {
        nome: "cursos",
        grupo: "ensino",
        fonte: "http://suap.ifpb.edu.br/api/ensino/cursos/v1/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "4 de Setembro de 2019, 20:42 (UTC-03:00)",
        data_criacao: "1 de Abril de 2019, 12:28 (UTC-03:00)",
        campos: [
            "ch", "codigo", "coordenador",
            "descricao", "diretoria", "eixo",
            "modalidade", "natureza_participacao",
            "resolucao_criacao", "url", "uuid", "matrizes"
        ]
    },
    {
        nome: "campi",
        grupo: "ensino" && "gestao",
        fonte: "https://suap.ifpb.edu.br/api/recursos-humanos/campus/v1/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "2 de Junho de 2021, 15:12 (UTC-03:00)",
        data_criacao: "1 de Abril de 2019, 11:17 (UTC-03:00)",
        campos: [
            "cep", "cnpj", "endereco",
            "nome", "sigla", "telefone",
            "url", "uuid", "municipio"
        ]
    },
    // {
    //     nome: "mapas de atividades",
    //     grupo: "ensino",
    //     fonte: " ",
    //     autor: "Diretoria-Geral de Tecnologia da Informação",
    //     mantenedor: "dti@ifpb.edu.br",
    //     ultima_atualizacao: "2 de Junho de 2021, 15:14 (UTC-03:00)",
    //     data_criacao: "1 de Abril de 2019, 11:23 (UTC-03:00)",
    // },
    {
        nome: "patrimônio",
        grupo: "administracao",
        fonte: "http://suap.ifpb.edu.br/api/patrimonio/itens-patrimonio/v1/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "4 de Setembro de 2019, 20:24 (UTC-03:00)",
        data_criacao: "1 de Abril de 2019, 12:21 (UTC-03:00)",
        campos: [
            "descricao", "campus", "estado_conservacao", "numero",
            "situacao", "url", "uuid", "valor_inicial",
            "valor_liquido_contabil"
        ]
    },
    {
        nome: "bolsas",
        grupo: "atividades estudantis",
        fonte: "http://suap.ifpb.edu.br/api/assistencia-estudantil/bolsas/v1/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "4 de Setembro de 2019, 20:24 (UTC-03:00)",
        data_criacao: "1 de Abril de 2019, 12:21 (UTC-03:00)",
        campos: [
            "aluno", "categoria_bolsa", "setor",
            "valor_bolsa", "url", "uuid"
        ]
    },
    // {
    //     nome: "programas de assistência estudantil",
    //     grupo: "atividades estudantis",
    //     fonte: "http://suap.ifpb.edu.br/api/assistencia-estudantil/programas/v1/",
    //     autor: "Diretoria-Geral de Tecnologia da Informação",
    //     mantenedor: "dti@ifpb.edu.br",
    //     ultima_atualizacao: "4 de Setembro de 2019, 17:39 (UTC-03:00)",
    //     data_criacao: "1 de Abril de 2019, 12:06 (UTC-03:00)",
    // },
    {
        nome: "servidores",
        grupo: "gestao",
        fonte: "https://suap.ifpb.edu.br/api/recursos-humanos/servidores/v1/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "2 de Junho de 2021, 15:12 (UTC-03:00)",
        data_criacao: "1 de Abril de 2019, 11:09 (UTC-03:00)",
        campos: [
            "cargo_emprego", "disciplina_ingresso", "funcao_codigo",
            "jornada_trabalho",
            "matricula", "nome",
            "url", "uuid",
            "situacao", "setor_exercicio",
            "lotacao_suap", "lotacao_siap"
        ]
    },
    {
        nome: "setores",
        grupo: "gestao",
        fonte: "https://suap.ifpb.edu.br/api/recursos-humanos/setores/v1/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "2 de Junho de 2021, 15:12 (UTC-03:00)",
        data_criacao: "1 de Abril de 2019, 10:16 (UTC-03:00)",
        campos: [
            "is_siape", "nome",
            "sigla",
            "uo",
            "superior",
            "total_servidores", "nome",
            "url", "uuid",
            "setores_filho"
        ]
    },
    {
        nome: "projetos de extensão",
        grupo: "projetos",
        fonte: "http://suap.ifpb.edu.br/api/extensao/projeto-extensao/v1/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "2 de Junho de 2021, 15:16 (UTC-03:00)",
        data_criacao: "1 de Abril de 2019, 11:42 (UTC-03:00)",
        campos: [
            "aprovado", "area_conhecimento", "foco_tecnologico",
            "inicio_execucao", "fim_execucao",
            "justificativa", "resultados_esperados",
            "resumo", "titulo", "campus", "participantes", "url",
            "valor_total_executado",
            "uuid"
        ]
    },
    {
        nome: "projetos de pesquisa",
        grupo: "projetos",
        fonte: "https://suap.ifpb.edu.br/api/pesquisa/projeto/v1/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "2 de Junho de 2021, 15:15 (UTC-03:00)",
        data_criacao: "1 de Abril de 2019, 11:25 (UTC-03:00)",
        campos: [
            "aprovado", "area_conhecimento", "foco_tecnologico",
            "inicio_execucao", "fim_execucao",
            "justificativa", "resultados_esperados",
            "resumo", "titulo", "campus", "url",
            "valor_total_executado",
            "participantes", "url",
            "uuid"
        ]
    },
    {
        nome: "versões do SUAP",
        grupo: "tecnologia da informacao",
        fonte: "https://releases.ifpb.edu.br/api/releases/",
        autor: "Diretoria-Geral de Tecnologia da Informação",
        mantenedor: "dti@ifpb.edu.br",
        ultima_atualizacao: "2 de Junho de 2021, 17:33 (UTC-03:00)",
        data_criacao: "10 de Abril de 2019, 18:04 (UTC-03:00)",
        campos: [
            "author", "project"
        ]
    }
]

export default conjuntoDeDados;

export const retornarConjuntoDeDados = (nome => {
    return conjuntoDeDados.filter(conjunto => conjunto.nome === nome)[0];
})