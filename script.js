document.getElementById("meuBotao").onclick = function() {
    let resposta = confirm("Você realmente deseja apagar este item?");
    if (resposta) {
        // A ação de excluir o item pode ser realizada aqui
        console.log("Item foi excluído.");
    } else {
        console.log("Ação cancelada.");
    }
};