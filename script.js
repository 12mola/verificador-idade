function verificarIdade() {
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);
    let resultado = document.getElementById("resultado");

    if (nome === "") {
        resultado.innerHTML = "Por favor, digite seu nome.";
        return;
    }

    if (idade < 18) {
        resultado.innerHTML = nome + ", você é menor de idade. Portanto não pode acessar este conteúdo.";
    } else {
        resultado.innerHTML = nome + ", você é maior de idade. Acesso liberado.";
    }
}
