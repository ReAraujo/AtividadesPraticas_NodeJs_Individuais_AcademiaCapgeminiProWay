import { PessoaFisica } from "./PessoaFisica.js";
import { PessoaJuridica } from "./PessoaJuridica.js";

const pfisica1 = new PessoaFisica();
pfisica1.id = 1;
pfisica1.nome = "PessoaFísica1";
pfisica1.endereco = "Endereço da Pfisica1";
pfisica1.cpf = "111.222.333-44";

console.log(`Dados Pessoa Física: \nID: ${pfisica1.id} | Nome: ${pfisica1.nome} | Endereço: ${pfisica1.endereco} | CPF: ${pfisica1.cpf}`);

const pjuridica1 = new PessoaJuridica();
pjuridica1.id = 2;
pjuridica1.nome = "PessoaJurídica1";
pjuridica1.endereco = "Endereço da Pjuridica1";
pjuridica1.cnpj = "00.111.222/0001-01";

console.log(`Dados Pessoa Jurídica: \nID: ${pjuridica1.id} | Nome: ${pjuridica1.nome} | Endereço: ${pjuridica1.endereco} | CNPJ: ${pjuridica1.cnpj}`);
