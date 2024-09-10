export function tentativa(numJogador, numRandom){
    if (numJogador > numRandom){
        return "o número é maior que o valor aleatório"
    }else if (numJogador < numRandom){
        return "número menor que o valor aleatório"
    } else{
        return "Parabéns, você acertou!"
    }
}