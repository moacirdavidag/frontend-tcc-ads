import camposConjuntosDeDados from "../data/camposConjuntosDeDados";

export const retornarCamposDoConjuntoDeDados = (nome) => {
    return camposConjuntosDeDados.map(conjunto => {
        if(conjunto.nome === nome) {
            return conjunto.campos.sort();
        }
    })
}