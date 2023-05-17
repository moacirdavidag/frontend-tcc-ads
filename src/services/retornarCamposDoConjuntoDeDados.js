import camposConjuntosDeDados from "../data/camposConjuntosDeDados"

export const retornarCamposDoConjuntoDeDados = (nome) => {
    let conjunto = camposConjuntosDeDados.filter(conjunto => {
        return conjunto.nome === nome;
    });
    return conjunto[0].campos;
}