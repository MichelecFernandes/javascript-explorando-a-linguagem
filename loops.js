console.log("Uso de loops em JavaScript");

const listaDeCarros = new Array("Ferrari", "Lamborghini", "Porsche", "Bugatti");

const idadeComprador = 10;
const estaAcompanhado = true;
const carroPretendido = "Porsche";

if ((idadeComprador >= 18 || estaAcompanhado)) {
    if (listaDeCarros.indexOf(carroPretendido) !== -1) {
        console.log("Carro disponível será vendido para o comprador");
    }
} else {
    if (listaDeCarros.indexOf(carroPretendido) === -1) {
        console.log("Carro disponível para venda, mas não para o comprador");
    }
}

// Para usar o debbugger, basta colcoar os break points e clicar em Run and Debug, selecionar a opção "Node.js" e clicar no ícone de "Adicionar ponto de interrupção" (um círculo vermelho) na linha onde deseja pausar a execução do código. Depois, basta clicar em "Iniciar depuração" para começar a depurar o código.        

let contador = 0;

while (contador < listaDeCarros.length) {
    if (listaDeCarros[contador] === carroPretendido) {
        console.log("Carro encontrado: " + listaDeCarros[contador]);
        break; // Encerra o loop quando o carro pretendido é encontrado
    }
    contador++;
}