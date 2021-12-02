/* _  Crie um arquivo adicione uma variável inteira com qualquer valor. 
      Calcule o fatorial deste valor utilizando o for e imprima o resultado no terminal.
*/

let fatorial = 1;
let valor = 4;

for(let i = valor; i > 0; i--){
    fatorial *= i;
}

console.log(`O fatorial do número ${valor} é ${fatorial}.`);


