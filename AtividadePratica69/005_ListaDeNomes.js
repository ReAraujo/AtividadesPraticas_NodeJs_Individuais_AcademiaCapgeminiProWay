/* _  Crie um arquivo adicione uma lista de nomes. 
      Imprima o valor dos elementos no terminal utilizando a função forEach.
*/

// Criando um Objeto de Array:
const lista = new Array ("Mora", "Mia", "Baguera", "Cherie", "Apolo");

// Imprimindo o Array para teste de impressão:
//console.log(lista);

lista.forEach(lista=>console.log(lista));

// adionando itens no Array:
lista.push("Quem sabe mais um(a) gatinho(a)?");

console.log("\nImprimindo lista com mais um item:")
lista.forEach(lista=>console.log(lista));
