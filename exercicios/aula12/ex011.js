var idade = 12
console.log(`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
} else if (idade >=16 && idade <18) {
    console.log ('Voto OPCIONAL !')
} else if (idade >=18 && idade <65) {
    console.log ('Voto OBRIGATÓRIO !')
} else {
    console.log ('Voto OPCIONAL devido a idade !')
}
