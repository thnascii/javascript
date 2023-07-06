function soma (n1=0, n2=0) {  //Parâmetro formal pré definido com acréscimo do "=0" (igual a zero) 
    return n1 + n2
}

//Escrevendo na tela sem criar variável:
console.log (soma(2 , 5)) //Passando 2 parâmetros corretamente

//Escrevendo na tela criando variável:
let res = soma(2,5) //Passando 2 parâmetros corretamente
console.log(res)



//Se não passarmos os parâmetros corretamente, ou passarmos somente 1 parâmetro o resultado será "NaN" > "Not a Number" > "Não é um número"
console.log(soma(2)) 

// Para resolver o problema acima podemos deixar os parâmetros formal já pré-definidos acrescentando o "=0". Aí caso o usuário não digite todos os parâmetros reais ele irá considerar como zero. 
