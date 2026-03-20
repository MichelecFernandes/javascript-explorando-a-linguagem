console.log("Uso de arrays em JavaScript");

const listaDeCarros = new Array("Ferrari", "Lamborghini", "Porsche", "Bugatti");

console.log(listaDeCarros);
console.log(listaDeCarros[0]);
console.log(listaDeCarros[1]);
console.log(listaDeCarros[2]);
console.log(listaDeCarros[3]);

// Adicionando um novo elemento ao array
listaDeCarros.push("McLaren");
console.log(listaDeCarros); // Ferrari, Lamborghini, Porsche, Bugatti, McLaren

// Removendo o último elemento do array
listaDeCarros.pop();
console.log(listaDeCarros); // Ferrari, Lamborghini, Porsche, Bugatti

// Adicionando um elemento no início do array
listaDeCarros.unshift("Aston Martin");
console.log(listaDeCarros); // Aston Martin, Ferrari, Lamborghini, Porsche, Bugatti

// Removendo o primeiro elemento do array
listaDeCarros.shift();
console.log(listaDeCarros); // Ferrari, Lamborghini, Porsche, Bugatti

// RRemovendo um elemento específico do array
listaDeCarros.splice(2, 1); // Remove o elemento no índice 2 (Porsche)
console.log(listaDeCarros); // Ferrari, Lamborghini, Bugatti

// Removendo um elemento específico do array usando indexOf
const index = listaDeCarros.indexOf("Lamborghini");
if (index !== -1) {
    listaDeCarros.splice(index, 1); // Remove o elemento "Lamborghini"
}
console.log(listaDeCarros); // Ferrari, Bugatti

// Verificando se um elemento existe no array
const existeFerrari = listaDeCarros.includes("Ferrari");
console.log("Existe Ferrari?", existeFerrari); // true

const existeLamborghini = listaDeCarros.includes("Lamborghini");
console.log("Existe Lamborghini?", existeLamborghini); // false

// Imprimindo o tamanho do array
console.log("Tamanho do array:", listaDeCarros.length); // 2
