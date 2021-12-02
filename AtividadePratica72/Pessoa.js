export class Pessoa {
    #id;
    #nome;
    #endereco;

    // Métodos getters (métodos de acesso) e setters (métodos de modificação):
    get id(){
        return this.#id;
    }
    set id(id){
        this.#id = id;
    }

    get nome(){
        return this.#nome
    }
    set nome(nome){
        this.#nome = nome;
    }

    get endereco(){
        return this.#endereco
    }
    set endereco(endereco){
        this.#endereco = endereco;
    }

}