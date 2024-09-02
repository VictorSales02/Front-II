let lado1 = 3;
let lado2 = 4;
let lado3 = 5;
if (lado1 === lado2 && lado2 === lado3) {
    console.log("É Equilátero")
} else if(lado1 === lado2 || lado2 === lado3 || lado3 ===lado1) {
    console.log("É isósceles")
} else {
    console.log("É escaleno")
}