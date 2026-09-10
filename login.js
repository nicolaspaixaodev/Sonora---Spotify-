const formulario = document.getElementById("formulario");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const erroEmail = document.getElementById("erro-email");
const erroSenha = document.getElementById("erro-senha");
const olho = document.getElementById("olho");

olho.addEventListener("click", function () {
    if (senha.type === "password") {
        senha.type = "text";
        olho.textContent = "Ocultar";
    } else {
        senha.type = "password";
        olho.textContent = "Mostrar";
    }
});

function mostrarErro(campo, alvo, mensagem) {
    campo.classList.add("invalido");
    alvo.textContent = mensagem;
}

function limparErro(campo, alvo) {
    campo.classList.remove("invalido");
    alvo.textContent = "";
}

function validar() {
    let valido = true;

    if (email.value.trim() === "") {
        mostrarErro(email, erroEmail, "Informe seu e-mail ou nome de usuário.");
        valido = false;
    } else {
        limparErro(email, erroEmail);
    }

    if (senha.value === "") {
        mostrarErro(senha, erroSenha, "Informe sua senha.");
        valido = false;
    } else if (senha.value.length < 6) {
        mostrarErro(senha, erroSenha, "A senha precisa ter pelo menos 6 caracteres.");
        valido = false;
    } else {
        limparErro(senha, erroSenha);
    }

    return valido;
}

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    if (validar() === true) {
        window.location.href = "app.html";
    }
});

email.addEventListener("input", function () {
    limparErro(email, erroEmail);
});

senha.addEventListener("input", function () {
    limparErro(senha, erroSenha);
});