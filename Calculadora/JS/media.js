function calcularMedia() {
    var a = parseFloat(document.getElementById("a").value);
    var b = parseFloat(document.getElementById("b").value);
    var c = parseFloat(document.getElementById("c").value);

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira números válidos.";
    } else {
        var media = (a + b + c) / 3;
        document.getElementById("resultado").innerHTML = "Média: " + media.toFixed(2);

        if (media >= 8) {
            document.getElementById("mensagem").innerHTML = "Aluno aprovado!";
        } else {
            document.getElementById("mensagem").innerHTML = "Aluno reprovado.";
        }
    }
}
