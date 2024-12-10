function gerarNumerosEntre(min, max, numerosRepetidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * (fator)) + min
        if (numerosRepetidos.includes(aleatorio)) {
            reject(`${aleatorio} número repetido`)
        } else {
            resolve(aleatorio)
        }
    })
}
async function gerarMegaSena(qtde, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtde).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros

    } catch (e) {
        if (tentativas > 500) {
            throw "Erro: tentativas demais!"
        } else {
            return gerarMegaSena(qtde, tentativas + 1)
        }
    }
}

gerarMegaSena(30)
    .then(console.log)
    .catch(console.log)
