import conjuntoDados from "../data/conjuntoDados";

export const retornarConjuntoDados = (nome) => {
    return conjuntoDados.filter(conjunto => conjunto.nome === nome);
}

