/* _  Crie um arquivo index.js na raiz da pasta da atividade e 
      execute os testes de crud utilizando as classes model e repository.
*/

import Cliente from "./model/Cliente.js";
import ClienteRepository from "./repository/ClienteRepository.js";

console.log("- - - -  Clientes - - - -");

// Instanciando Objeto da Classe Cliente:
const cliente1 = new Cliente();

// Adicionando os dados ao objeto:
cliente1.id = 2;
cliente1.nomeCompleto = "NomeCompleto do Cliente4";
cliente1.dataNascimento = "01/01/1904";
cliente1.cpf = "001.002.003-08";
cliente1.endereco = "Rua Endereço da Cliente4";

const repository = new ClienteRepository();

// Utilizando os métodos de CRUD:

// Criando/inserindo um novo dado no DB:
await repository.create(cliente1);

// Listando dados do DB:
const listar = await repository.read();
console.log(listar);

// Alterando um item no DB:
await repository.update(cliente1);

// Deletando um item no DB:
await repository.delete(2);

// Impressão dos dados:
console.log(`ID: ${cliente1.id} | Nome completo: ${cliente1.nomeCompleto} | Data de Nascimento: ${cliente1.dataNascimento} | CPF: ${cliente1.cpf} | Endereço: ${cliente1.endereco}`);
