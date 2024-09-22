// Função para cálculo de média
function calcularMedia() {
    let nome = prompt("Digite o nome do aluno:");
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let nota4 = parseFloat(prompt("Digite a quarta nota:"));

    let media = (nota1 + nota2 + nota3 + nota4) / 4;
    alert("Aluno: " + nome + "\nMédia: " + media.toFixed(2));
}

// Função para realizar operações matemáticas
function operacoesMatematicas() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let produto = numero1 * numero2;
    let divisao = numero1 / numero2;
    let resto = numero1 % numero2;

    alert(
        "Soma: " + soma + "\n" +
        "Subtração: " + subtracao + "\n" +
        "Produto: " + produto + "\n" +
        "Divisão: " + divisao.toFixed(2) + "\n" +
        "Resto da divisão: " + resto
    );
}
