console.log("Uso de condicionais em JavaScript");

const listaDeCarros = new Array("Ferrari", "Lamborghini", "Porsche", "Bugatti");

const idadeComprador = 15;
const estaAcompanhado = true;

// || - operador lógico "OU"
// && - operador lógico "E"
// ! - operador lógico "NÃO"

if(idadeComprador >= 18 || estaAcompanhado) {
    console.log("Carro sera vendido para o comprador");
    listaDeCarros.splice(1, 1); // Remove o elemento no índice 2 (Porsche)
} else {
    console.log("Carro não sera vendido para o comprador");
}