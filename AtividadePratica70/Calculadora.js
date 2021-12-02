/* _  Crie um arquivo para criação de uma calculadora. 
      Adicione 4 métodos para realizar as 4 operações básicas da matemática. 
      Realize a chamada dos 4 métodos e imprima seus resultados.
*/

function somar(n1, n2){
    let resultado = n1 + n2;
    return resultado;
}

function subtrair(n1, n2){
    let resultado = n1 - n2;
    return resultado;
}

function multiplicar(n1, n2){
    let resultado = n1 * n2;
    return resultado;
}

function dividir(n1, n2){
    let resultado = n1 / n2;
    return resultado;
}

console.log(`Resultado da soma: ${somar(10,20)}`);

console.log(`Resultado da subtração: ${subtrair(10,40)}`);

console.log(`Resultado da mutiplicação: ${multiplicar(10,50)}`);

console.log(`Resultado da divisão: ${dividir(10,60)}`);