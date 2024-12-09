const { rejects } = require("assert");
const { resolve } = require("path");

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, rejects) => {
        try {
            con.log('temp')
            if (Math.random() < chanceErro) {
                rejects('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch (e) {
            rejects(e)
        }
    })
}
funcionarOuNao('Testando...', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consolo.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .then(() => console.log('Quase Fim!'))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!'))