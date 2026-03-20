console.log("Olá, Mundo! Este é meu primeiro programa em JavaScript.");

// No JS é boa pratica utilizar camelCase para nomear variáveis.

// Se eu não colocar o tipo da variável, o JS irá inferir o tipo automaticamente, mas é recomendado usar let ou const para declarar variáveis. Se não informatar o tipo, o JS irá considerar a variável como var, do tipo global.
console.log("Vamos aprender sobre variáveis em JavaScript!");

// Variável do tipo string
let nome = "João";
console.log("O nome é: " + nome);

// Variável do tipo number
let idade = 30;
console.log("A idade é: " + idade);

// Variável do tipo boolean
let isStudent = true;
console.log("É estudante? " + isStudent);

// Variável do tipo array
let frutas = ["maçã", "banana", "laranja"];
console.log("Frutas: " + frutas);

// Variável do tipo objeto
let pessoa = {
    nome: "Maria",
    idade: 25,
    profissao: "Engenheira"
};
console.log("Pessoa: ", pessoa);    

// Conversao de tipos
let numeroString = "100";
let numero = Number(numeroString);
console.log("Número convertido: " + numero);


// Isso acontece porque:
// + com string costuma juntar textos
// -, * e / só fazem sentido matemático, então o JS tenta converter a string para número, e se conseguir, ele faz a operação normalmente. Se não conseguir, ele retorna NaN (Not a Number).
console.log("2" + 2); // "22"
console.log("2" - 2); // 0
console.log("2" * 2); // 4
console.log("2" / 2); // 1

// Conversão de forma explicita usando parseFloat e parseInt:
console.log(parseFloat("3.14")); // 3.14
console.log(parseInt("42")); // 42
console.log(parseInt("42.5")); // 42
console.log(parseInt("abc")); // NaN


