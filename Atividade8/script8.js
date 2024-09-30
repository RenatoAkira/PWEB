const totalRespondents = 45;
let data = [];

document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const opinion = parseInt(document.getElementById('opinion').value);

    data.push({ age, gender, opinion });

    if (data.length === totalRespondents) {
        displayResults();
    }
    event.target.reset();
});

function displayResults() {
    const totalAge = data.reduce((sum, person) => sum + person.age, 0);
    const ages = data.map(person => person.age);
    const minAge = Math.min(...ages);
    const maxAge = Math.max(...ages);
    const countPoorOpinion = data.filter(person => person.opinion === 1).length;
    const countGoodOpinion = data.filter(person => person.opinion === 4 || person.opinion === 3).length;
    const maleCount = data.filter(person => person.gender === 'masculino').length;
    const femaleCount = data.filter(person => person.gender === 'feminino').length;

    const averageAge = totalAge / data.length;
    const goodOpinionPercentage = (countGoodOpinion / totalRespondents) * 100;

    alert(`Resultados:
    Média da idade: ${averageAge.toFixed(2)}
    Idade da pessoa mais velha: ${maxAge}
    Idade da pessoa mais nova: ${minAge}
    Quantidade de pessoas que responderam péssimo: ${countPoorOpinion}
    Porcentagem de pessoas que responderam ótimo e bom: ${goodOpinionPercentage.toFixed(2)}%
    Número de mulheres que responderam: ${femaleCount}
    Número de Homens que responderam: ${maleCount}`);
}
