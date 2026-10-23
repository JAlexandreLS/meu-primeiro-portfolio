let botao = document.querySelector("#botao-tema");


// ---PASSO 1: O Site acabou de carregar. Vamos checar se o usuário já esteve aqui antes?
let temaSalvo = localStorage.getItem("tema");


if (temaSalvo === "claro") {
    // Se a anotação no banco diz "claro", vestimos a roupa do modo Claro imediatamente
    document.body.classList.toggle("modo-claro");

}

// PASSO 2: A receita de alternar o tema quando o usuário clica no botão 
function alternaTema() {
    // Liga ou desliga a classe no HTML
    document.body.classList.toggle("modo-claro");


    // Agora o JavaScript verifica: a roupa "modo-claro" esstá ativa na tela neste momento?
    if (document.body.classList.contains("modo-claro"))  {
        // Se SIM, guardamos a palavra "claro" no nosso mini bancco de dados
        localStorage.setItem("tema", "claro");
    } else {
        // Se NÃO (significa que está no modo escuro), guardamos a palavra "escuro"
        localStorage.setItem("tema", "escuro"); 
    }
}

botao.addEventListener("click", alternaTema);

