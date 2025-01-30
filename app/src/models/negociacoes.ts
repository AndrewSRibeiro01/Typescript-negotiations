import { Negociacao } from "./negociacao.js";
import { Modelo } from '../interface/modelo.js';

<<<<<<< HEAD
export class Negociacoes implements Modelo<Negociacoes> {
=======
export class Negociacoes implements Imprimivel {
>>>>>>> de80e8b43868acd507d9a55cc60452e8ee69f216
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.negociacoes, null, 2)
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}