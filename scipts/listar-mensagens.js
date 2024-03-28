const mensagens = localStorage.getItem("mensagens");
const containerMensagens = document.getElementById("container-mensagens");
const btnExcluir = document.getElementById("btnExcluir");

if (mensagens) {
    const vetorMensagens = JSON.parse(mensagens);
    for (let i = 0, len = vetorMensagens.length; i < len; i++) {
        containerMensagens.insertAdjacentHTML("beforeend",
        `
        <div class="inner-container">
            <h3>${vetorMensagens[i].nome}</h3>
            <p>${vetorMensagens[i].mensagem}</p>
        </div>
        `);
    }
}

btnExcluir.addEventListener("click", () => {
    localStorage.removeItem("mensagens");
    // remove mensagens visualmente
    while (containerMensagens.firstChild) {
        containerMensagens.removeChild(containerMensagens.firstChild);
    }
});