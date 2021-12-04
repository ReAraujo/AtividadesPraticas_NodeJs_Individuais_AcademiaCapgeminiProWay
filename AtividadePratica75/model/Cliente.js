/* _  Crie uma camada Model e nela adicione uma classe Cliente que represente os campos da tabela no banco de dados.
*/

class Cliente {
    id;
    nomeCompleto;
    dataNascimento;
    cpf;
    endereco;

    // Método construtor da Classe 
    constructor(nomeCompleto, dataNascimento, cpf, endereco, id = null){
        this.id = id;
        this.nomeCompleto = nomeCompleto;
        this.dataNascimento = dataNascimento;
        this.cpf = cpf;
        this.endereco = endereco;
    }
}

export default Cliente;