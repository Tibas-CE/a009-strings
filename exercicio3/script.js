//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair";
const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja");
const fraseExtra = novaFrase.replace("BOAS VINDAS", "boas vindas").replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR");


console.log(`${frase}, \n${novaFrase}, \n${fraseExtra}`); 
// console.log(novaFrase.toUpperCase(''));