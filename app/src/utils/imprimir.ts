import { Imprimivel } from "./imprimivel.js";

export const imprimir = (...objetos: Imprimivel[]) => {
    for (let objeto of objetos) {
        console.log(objeto.paraTexto());
    }
};