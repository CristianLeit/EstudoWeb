Array.prototype.map2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"Borracha", "preco":3.45}',
    '{"nome":"Cardeno", "preco":13.90}',
    '{"nome":"Kit de Lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco":7.50}'
]
//retorna um array apenas com os preços
const paraObj = a => JSON.parse(a)
const precoParse = produto => produto.preco
const resultado = carrinho.map(paraObj).map2(precoParse)
console.log(resultado);

const soPreco = carrinho.map2((a) => {
    carParse = JSON.parse(a)
    return carParse.preco
})
console.log(soPreco);