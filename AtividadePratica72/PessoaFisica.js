import {Pessoa} from "./Pessoa.js";

export class PessoaFisica extends Pessoa{
    #cpf;

    // Método Construtor:
    constructor(cpf){
        super();
        this.#cpf = cpf;
    }

    // Métodos getters (métodos de acesso) e setters (métodos de modificação):
    get cpf(){
        return this.#cpf
    }
    set cpf(cpf){
        this.#cpf = cpf;
    }



    
}