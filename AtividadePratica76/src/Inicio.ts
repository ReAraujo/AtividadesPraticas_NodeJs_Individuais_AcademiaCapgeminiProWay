import { Cliente } from "./model/Cliente";

const cliente1 = new Cliente();
cliente1.nomeCompleto = "NomeCompleto Cliente1";
cliente1.dataNascimento = "01/01/1901";
cliente1.cpf = "001.005.006-08";
cliente1.endereco = "Endereço do Cliente1";

console.log(cliente1);