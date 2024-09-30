function maiorNumero(a, b, c) {
    return Math.max(Number(a), Number(b), Number(c));
}

function ordemCrescente(a, b, c) {
    const nums = [Number(a), Number(b), Number(c)];
    nums.sort((x, y) => x - y);
    return nums.join(', ');
}

function isPalindromo(str) {
    const upperStr = str.toUpperCase();
    const reversedStr = upperStr.split('').reverse().join('');
    return upperStr === reversedStr ? 'É um palíndromo' : 'Não é um palíndromo';
}

function tipoTriangulo(a, b, c) {
    const lado1 = Number(a);
    const lado2 = Number(b);
    const lado3 = Number(c);

    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            return 'Triângulo equilátero';
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return 'Triângulo isósceles';
        } else {
            return 'Triângulo escaleno';
        }
    } else {
        return 'Não forma um triângulo';
    }
}
