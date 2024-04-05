const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const inputMensagem = document.getElementById("msg");

class Mensagem {
    constructor (nome, email, mensagem) {
        this.nome = nome;
        this.email = email;
        this.mensagem = mensagem;
    }
}

function salvarMensagem(mensagem) {
    const mensagens = localStorage.getItem("mensagens");
    let vetorMensagens;
    if (mensagens) {
        vetorMensagens = JSON.parse(mensagens);
    } else {  // nenhuma mensagem armazenada
        vetorMensagens = new Array();
    }
    vetorMensagens[vetorMensagens.length] = mensagem;
    localStorage.setItem("mensagens", JSON.stringify(vetorMensagens));
}

document.getElementById("form-contato").addEventListener("submit", (e) => {
    const nome = inputNome.value;
    const email = inputEmail.value;
    const msg = inputMensagem.value;

    // cria objeto com informacoes da mensagem
    const mensagem = new Mensagem(nome, email, msg);
    // salva nova mensagem
    salvarMensagem(mensagem);
    alert("Mensagem enviada");
});