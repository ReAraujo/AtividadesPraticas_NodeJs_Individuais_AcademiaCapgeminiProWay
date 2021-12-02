/* _  Crie um terceiro arquivo para realizar os testes. 
      Instancie um objeto de cada classe, atribua valores e 
      imprima os objetos no terminal.
*/

import {Produto} from './Produto.js';

import {Categoria} from './Categoria.js';

// Instanciando um objeto da classe Produto:
const produto1 = new Produto();

// Atribuindo os valores: 
produto1.nome = "Produto1";
produto1.descricao = "Descricao do Produto1";
produto1.valor = 50.98;

// Instanciando um objeto da classe Categoria:
const categoria1 = new Categoria();

// Atribuindo os valores: 
categoria1.nome = "Categoria1";
categoria1.descricao = "Descricao da Categoria1";

// Impressão do objeto 'produto1':
console.log(produto1);

// Impressão do objeto 'categoria1':
console.log(categoria1);