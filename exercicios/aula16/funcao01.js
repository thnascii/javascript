function parimp(n) {
    if (n%2 == 0) {
        return 'PAR'
    } else {
        return 'ÍMPAR'
    }
}


//Escrevendo na tela criando variável
let res = parimp(11) //Chamada para a ação
console.log(`O número digitado é um número ${res}!`)


//Posso escrever na tela sem criar variável também:

console.log(parimp(11))