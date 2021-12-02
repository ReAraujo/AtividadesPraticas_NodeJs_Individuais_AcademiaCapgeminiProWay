/* _  Crie um arquivo js e nele Crie duas classes, uma classe de para Pessoa e outra para Cliente. 
      Crie um objeto de cada classe e imprima seus valores.
*/

// Criando as Classes Pessoa e Cliente:
class Pessoa {
    nomeCompleto;
    dataNascimento;
    cpf;
    rg;
    naturalidade;
}

class Cliente {
    id;
    nomeCompleto;
    dataNascimento;
    endereco;
    cpf;
}

// Criando o objeto de Pessoa: 
const pessoa1 = new Pessoa();

// Inserindo os dados no objeto 
pessoa1.nomeCompleto = "Pessoa1";
pessoa1.dataNascimento = "01/01/1901";
pessoa1.cpf = "001.002.003-04";
pessoa1.rg = "1122334455";
pessoa1.naturalidade = "Cachoeira do Sul/RS"

// Criando o objeto de Cliente: 
const cliente1 = new Cliente();

// Inserindo os dados no objeto 
cliente1.id = "001";
cliente1.nomeCompleto = "Cliente1";
cliente1.dataNascimento = "02/02/1902";
cliente1.endereco = "Rua Endereço do Cliente1, 1010";
cliente1.cpf = "005.006.007-08";

// Imprimindo os valores do Objeto da Classe Pessoa
console.log(pessoa1);

// Imprimindo os valores do Objeto da Classe Cliente
console.log(cliente1);
