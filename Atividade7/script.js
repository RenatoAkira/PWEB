function jogar(escolhajogador){
const opcoes = ['pedra', 'papel', 'tesoura'];

const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

let resultado = `Você escolheu: ${escolhajogador}. Computador escolheu: ${escolhaComputador}\n`;

if(escolhajogador === escolhaComputador){s
    resultado = " Resultado: empate!";
}else if(
    (escolhajogador === 'pedra' && escolhaComputador === 'tesoura') ||
    (escolhajogador === 'tesoura' && escolhaComputador === 'papel') ||
    (escolhajogador === 'papel' && escolhaComputador === 'pedra')
){
    resultado += "Resultado: Você ganhou!";
} else {
    resultado += "Resultado: Você perdeu!";
}

document.getElementById('resultado').innerText = resultado;
}