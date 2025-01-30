import { Negociacao } from "../models/negociacao.js";
export class NegociacoesService {
    obterNegociacoes() {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados) => {
            return dados.map(m => {
                return new Negociacao(new Date(), m.vezes, m.montante);
            });
        });
    }
}
