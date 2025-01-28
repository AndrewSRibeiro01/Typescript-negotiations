import { escapar } from "../decorators/escapar.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";
export abstract class View<T> {
    protected elemento: HTMLElement

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = <HTMLInputElement>elemento
        } else {
            throw Error(`Seletor${seletor} não existe no DOM, verifique!`)
        }
    }

    @logarTempoDeExecucao(true)
    @inspect
    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
}