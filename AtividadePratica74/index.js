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
cliente1.nomeCompleto = "NomeCompleto do Cliente2";
cliente1.dataNascimento = "01/01/1901";
cliente1.cpf = "001.002.003-04";
cliente1.endereco = "Rua Endereço da Cliente1";

const repository = new ClienteRepository();

const salvar = await repository.create(cliente1);

// Impressão dos dados:
console.log(`ID: ${cliente1.id} | Nome completo: ${cliente1.nomeCompleto} | Data de Nascimento: ${cliente1.dataNascimento} | CPF: ${cliente1.cpf} | Endereço: ${cliente1.endereco}`);
