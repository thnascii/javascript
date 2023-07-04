function contador() {
    let inicio = window.document.getElementById('tinicio')
    let fim = window.document.getElementById('tfim')
    let passo = window.document.getElementById('tpasso')

    let res = window.document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
       // window.alert('[ERRO] Faltam dados !')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
            p = 1
        }

        if (i < f) {
            //Contagem CRESCENTE
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
         
        } else {
            //CONTAGEM REGRESSIVA
            for (let c= i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`         
    }
}