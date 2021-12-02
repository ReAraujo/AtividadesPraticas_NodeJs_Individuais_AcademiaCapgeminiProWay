import {Pessoa} from "./Pessoa.js";

export class PessoaJuridica extends Pessoa {
    #cnpj;

    // Método Construtor:
    constructor(cnpj){
        super();
        this.#cnpj = cnpj;
    }

    // Métodos getters (métodos de acesso) e setters (métodos de modificação):
    get cnpj(){
        return this.#cnpj;
    }
    set cnpj(cnpj){
        this.#cnpj = cnpj;
    }
}