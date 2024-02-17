//Exercicio 01


var resultado1 = 10 + 15;
console.log(resultado1);  // Saída: 25 (number)

var resultado2 = "10" + 2;
console.log(resultado2);  // Saída: "102" (string)

var resultado3 = "10" * 2;
console.log(resultado3);  // Saída: 20 (number)

var resultado4 = "10" / 3;
console.log(resultado4);  // Saída: 3.3333333333333335 (number)

var resultado5 = "10" % 3;
console.log(resultado5);  // Saída: 1 (number)

var resultado6 = 10 + true;
console.log(resultado6);  // Saída: 11 (number)

var resultado7 = 10 == "10";
console.log(resultado7);  // Saída: true (boolean)

var resultado8 = 10 === "10";
console.log(resultado8);  // Saída: false (boolean)

var resultado9 = 10 < 11;
console.log(resultado9);  // Saída: true (boolean)

var resultado10 = 10 > 12;
console.log(resultado10);  // Saída: false (boolean)

var resultado6 = 10 <= 10.1;
console.log(resultado6);  // Saída: true (boolean)

var resultado7 = 10 > 9.99;
console.log(resultado7);  // Saída: true (boolean)

var resultado8 = 10 != "dez";
console.log(resultado8);  // Saída: true (boolean)

var resultado1 = 10 + true;
console.log(resultado1);  // Saída: 11 (number)

var resultado10 = "dez" + true;
console.log(resultado10);  // Saída: "deztrue" (string)

var resultado11 = 10 + false;
console.log(resultado11);  // Saída: 10 (number)

var resultado12 = 10 * false;
console.log(resultado12);  // Saída: 0 (number)

var resultado13 = true + true;
console.log(resultado13);  // Saída: 2 (number)

var numero = 10;
var resultado14 = numero++;
console.log(resultado14);  // Saída: 10 (number)

var numero = 10;
var resultado15 = numero--;
console.log(resultado15);  // Saída: 10 (number)

var resultado16 = 1 & 1;
console.log(resultado16);  // Saída: 1 (number)

var resultado17 = 1 & 0;
console.log(resultado17);  // Saída: 0 (number)

var resultado18 = 0 & 0;
console.log(resultado18);  // Saída: 0 (number)

var resultado19 = 1 & 0;
console.log(resultado19);  // Saída: 0 (number)

var resultado20 = 0 / 1;
console.log(resultado20);  // Saída: 0 (number)

var resultado21 = 5 + 5 == 10;
console.log(resultado21);  // Saída: true (boolean)

var resultado22 = "5" + "5" == 10;
console.log(resultado22);  // Saída: false (boolean)

var resultado23 = "5" * 2 > 9;
console.log(resultado23);  // Saída: true (boolean)

var resultado24 = (10 + 10) * 2;
console.log(resultado24);  // Saída: 40 (number)

var resultado24 = (10 + 10) * 2;
console.log(resultado24);  // Saída: 40 (number)


//Exercicio 02

var branco = "preto";
var preto = "cinza";
var cinza = "branco";
var carro = "preto";
var valor = 30000;
var prestacao = 750;

//a) branco == "branco"
var resultadoA = branco == "branco";
console.log(resultadoA);  // Saída: false (boolean)

//b) branco == cinza
var resultadoB = branco == cinza;
console.log(resultadoB);  // Saída: false (boolean)

//c) carro === branco
var resultadoC = carro === branco;
console.log(resultadoC);  // Saída: false (boolean)

//d) var cavalo = carro == "preto" ? "cinza" : "marron";
var cavalo = carro == "preto" ? "cinza" : "marron";
console.log(cavalo);  // Saída: "cinza"

//e) Quantas prestações são necessárias para pagar o valor do carro com uma entrada de 3.000? Demonstre a operação.
var entrada = 3000;
var valorRestante = valor - entrada;
var numPrestacoes = valorRestante / prestacao;
console.log(numPrestacoes);  // Saída: 36 (number)

//f) Somando as variáveis de cores é formada uma string de quantos caracteres?
var coresConcatenadas = branco + preto + cinza + carro;
var numCaracteres = coresConcatenadas.length;
console.log(numCaracteres);  // Saída: 20 (number)
