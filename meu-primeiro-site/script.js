let visitante = prompt("Qual é o seu nome?");

// Aqui o JavaScript toma a decisão:
if (visitante === "" || visitante === null) {
    // Se o nome estiver vazio ("") OU se a pessoa clicou em cancelar (null):
visitante = "Visitante";

}

// 1. O JavaScript vai lá no HTML e captura a tag <h2>;
let subtitulo = document.querySelector("h2");

// 2. Ele altera o texto de dentro dessa tag em tempo real!
subtitulo.innerText = "Portfólio visitado por : " + visitante;
console.log("O DOM foi atualizado para o visitante: " + visitante);