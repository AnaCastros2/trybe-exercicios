// 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1){
    console.log(numbers[index]);
} */

// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0

for (let index = 0; index < numbers.length; index += 1){
    result += numbers[index];
}

console.log(result); */

// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let index = 0; index < numbers.length; index += 1){
    soma += numbers[index];
}

let media = soma / numbers.length;
//console.log(media); 

if (media > 20){
    console.log ("Valor maior que 20");
}
else{
    console.log ("Valor menor ou igual a 20");
}*/

//Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let maiorNumero = numbers [0];

// for(let index = 1; index < numbers.length; index += 1){
//     if(numbers[index] > maiorNumero) {
//         maiorNumero = numbers[index];
//     }
// }

// console.log(maiorNumero);


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let fatorial = 1

for (let index = 1; index < numeros.length; index += 1){
    fatorial *= numeros[index];
}

console.log(fatorial)