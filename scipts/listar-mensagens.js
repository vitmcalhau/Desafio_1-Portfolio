const mensagens = localStorage.getItem("mensagens");
const containerMensagens = document.getElementById("container-mensagens");
const btnExcluir = document.getElementById("btnExcluir");
const semMensagens = document.getElementById("sem-mensagens")

function verificarMensagens() {
    if (mensagens) {
        const vetorMensagens = JSON.parse(mensagens);
    
        semMensagens.style.visibility = "hidden";
        // adiciona card das mensagens no html
        for (let i = 0, len = vetorMensagens.length; i < len; i++) {
            containerMensagens.insertAdjacentHTML("beforeend",
            `
            <div class="inner-container">
                <h3>${vetorMensagens[i].nome}</h3>
                <p>${vetorMensagens[i].mensagem}</p>
            </div>
            `);
        }
    } else {
        semMensagens.style.visibility = "visible";
    }
}

btnExcluir.addEventListener("click", () => {
    localStorage.removeItem("mensagens");
    // remove mensagens visualmente
    while (containerMensagens.firstChild) {
        containerMensagens.removeChild(containerMensagens.firstChild);
    }
    semMensagens.style.visibility = "visible";
});

verificarMensagens()