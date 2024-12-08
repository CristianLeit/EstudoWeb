const primeiroElemento = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

let p = new Promise(function (cumprirPromessa) {
    cumprirPromessa(['Ana', "Bia", 'Carlos', "Daniel"])

})
p.then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    //.then(v => console.log(v))
    .then(console.log)