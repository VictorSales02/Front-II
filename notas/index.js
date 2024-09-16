let notas = [6.5, 8.0, 6.0, 9.0, 5.5];

console.log("Primeira nota:", notas[0]);
console.log("Última nota:", notas[notas.length - 1]);

notas.push(7.8);
console.log("Array após adicionar nova nota:", notas);

notas.shift();
console.log("Array após remover a primeira nota:", notas);

notas.forEach(function(nota, index) {
    console.log(`Nota ${index + 1}:`, nota);
});

let soma = notas.reduce(function(acumulador, nota) {
    return acumulador + nota;
}, 0);
let media = soma / notas.length;
console.log("Média das notas:", media.toFixed(2));

let acimaMedia = notas.filter(function(nota) {
    return nota > 7;
});
console.log("Notas maiores que 7:", acimaMedia);

notas.sort(function(a, b) {
    return a - b;
});
console.log("Notas em ordem crescente:", notas);

let nota65 = notas.includes(6.5);
console.log("O array contém a nota 6.5?", nota65);

let nota80 = notas.indexOf(8.0);
console.log("O índice da nota 8.0 é:", nota80);

let quadrado = notas.map(function(nota) {
    return nota * nota;
});
console.log("Notas ao quadrado:", quadrado);