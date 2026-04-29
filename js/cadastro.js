
const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const senhaInput = document.getElementById("senha");
    const confirmarInput = document.getElementById("confirmarSenha");

    const senha = senhaInput.value;
    const confirmar = confirmarInput.value;

    senhaInput.style.border = "";
    confirmarInput.style.border = "";

    if (!/^\d+$/.test(senha)) {
        senhaInput.style.border = "2px solid red";
        confirmarInput.style.border = "2px solid red";
        alert("A senha deve conter apenas números.");
        return;
    }

    if (senha.length < 6) {
        senhaInput.style.border = "2px solid red";
        confirmarInput.style.border = "2px solid red";
        alert("A senha deve ter no mínimo 6 dígitos.");
        return;
    }

    if (senha !== confirmar) {
        senhaInput.style.border = "2px solid red";
        confirmarInput.style.border = "2px solid red";
        alert("As senhas não coincidem.");
        return;
    }

    senhaInput.style.border = "2px solid green";
    confirmarInput.style.border = "2px solid green";

    alert("Cadastro realizado com sucesso!");
    form.reset();

    senhaInput.style.border = "1px solid var(--rosa)";
    confirmarInput.style.border = "1px solid var(--rosa)";
});
