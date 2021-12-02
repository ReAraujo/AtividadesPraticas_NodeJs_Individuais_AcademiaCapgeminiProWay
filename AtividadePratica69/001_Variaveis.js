/* _ Crie um arquivo que contenha 5 variáveis: nome, sobrenome, dataNascimento, cpf e rg. 
     Atribua uma valor a cada variável e ao final imprima todos os valores:
*/

const nome = "Pessoa1";
const sobrenome = "Sobrenome1";
const dataNascimento = "01/01/1901";
const cpf = "000.111.222-33";
const rg = "1011121314";

console.log(nome, sobrenome, dataNascimento, cpf, rg); // impressão utilizando ',' -> gera esparço entre as Strings 
console.log(nome + sobrenome + dataNascimento + cpf + rg); // impressão utilizando '+' -> gera concatenação entre as Strings 
console.log("Nome: " + nome + " Sobrenome: " + sobrenome + " Data de nascimento: " + dataNascimento + " CPF: " + cpf + " RG: " + rg); // concatenação
console.log(`Nome: ${nome} Sobrenome: ${sobrenome} Data de nascimento: ${dataNascimento} CPF: ${cpf} RG: ${rg}`); // impressão com interpolação