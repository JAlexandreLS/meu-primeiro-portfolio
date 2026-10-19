/* let visitante = prompt("Qual é o seu nome?");

// Aqui o JavaScript toma a decisão:
//if (visitante === "" || visitante === null) {
Se o nome estiver vazio ("") OU se a pessoa clicou em cancelar (null):
visitante = "Visitante";

}

// 1. O JavaScript vai lá no HTML e captura a tag <h2>;
let subtitulo = document.querySelector("h2");

// 2. Ele altera o texto de dentro dessa tag em tempo real!
subtitulo.innerText = "Portfólio visitado por : " + visitante;
console.log("O DOM foi atualizado para o visitante: " + visitante);*/
// 1. O JS localiza o botão através do ID único dele
let botao = document.querySelector("#botao-tema");

// 2. Criamos a "receita" (função) do que deve acontecer 
function alternarTema() {
    // O comando toggle funciona como um interruptor de luz:
    // Se a classe "modo-claro" não estiver no body, ele coloca.
    // Se já estiver lá, ele retira!
    document.body.classList.toggle("modo-claro");
}

// 3. Ligamos o botão ao evento de clique e mandamos rodar a receita acima
botao.addEventListener("click", alternarTema); 