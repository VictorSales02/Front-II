import { random } from "./random.js"
import { tentativa } from "./tentativa.js"
let tentativasMax = 5;
const numeroCorreto = random(1, 50);

while(tentativasMax > 0){
    let numJogador = parseInt(prompt("Adivinhe o número (entre 1 e 50): "));
    let result = tentativa(numJogador, numeroCorreto);

    console.log(result);

    if (result === "Parabéns, você acertou!"){
        break;
    }

    tentativasMax -= 1;

    if (tentativasMax === 0) {
        console.log("Você perdeu! O número era " + numeroCorreto)
    }
}

