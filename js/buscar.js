async function buscar(){
    console.log("Passei por aqui");

    const resposta = await fetch("https://66186b389a41b1b3dfbd0559.mockapi.io/agendas")
    const respostaDadosAgenda = await resposta.json();

    console.log("Resposta: ", respostaDadosAgenda);

    const cards = document.getElementById("cards_games");

    cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
        return "TESTE "
    });

}
console.log("Antes de buscar")
buscar();
console.log("Depois de buscar")