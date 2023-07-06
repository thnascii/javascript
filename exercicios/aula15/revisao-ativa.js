//Revisão Variáveis Compostas

let num = [5, 8, 4]

console.log(num) // Escreve na tela os valores que estão dentro de cada elemento

num[3] = 6 //Acrescentou o valor "6" dentro do índice de número "3". Desta forma eu preciso saber qual será o número do próximo índice para identificar dentro das chaves [].

console.log(num) // Escreve na tela os valores que estão dentro de cada elemento

num.push(7) //Acrescenta um valor sem ficar se preocupando qual o número do próximo índice. Desta forma ele acrescenta um índice e atribui o valor que foi passado dentro do parênteses
console.log(num)

console.log(`O vetor acima tem ${num.length} índices`) //O .length mostra o "comprimento", "tamanho" ou a quantidade de índices que tem o vetor.

console.log('Para organizar os valores dos elementos em ordem crescente utilizamos o método "num.sort()"')
num.sort() //Organiza em ordem crescente.
console.log(num)

//Para escrever na tela (de forma mais organizada,um em cada linha) os valores de cada índice temos 3 formas:

//Primeira forma (Mais trabalhosa)
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])

console.log('________________________________________________')


//Segunda forma - Utilizando estruturas de repetições:
for (let pos=0; pos < num.length; pos++) {
    console.log(num[pos])
}
console.log('________________________________________________')


//Terceira forma - Utilizando a estrutura for...in
for(let pos in num) {
    console.log(num[pos])
}

console.log('________________________________________________')

console.log('Para buscar valores dentro de um vetor utilizamos o método "num.indexOf()"')
console.log(`Estes são os valores do meu vetor: ${num}`)
console.log('Ao buscar o "num.indexOf(7) o sistema me retorna o valor "3" pois o valor "7" está no índice de número "3"')
console.log(num.indexOf(7))
