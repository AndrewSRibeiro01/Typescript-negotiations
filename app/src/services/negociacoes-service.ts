import { NegociacoesDoDia } from "../interface/negociacao-do-dia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService {

    public obterNegociacoes(): Promise<Negociacao[]> {
        return fetch("http://localhost:8080/dados")
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) => {
                return dados.map(m => {
                    return new Negociacao(
                        new Date(),
                        m.vezes,
                        m.montante
                    )
                });
            })
    }
}