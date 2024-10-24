const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

console.log(ferrari.__proto__)//acesso ao prototipo pai
console.log(ferrari.prototype)//undefined
console.log();
console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObj() { }
console.log(typeof Object, typeof MeuObj);
console.log(Object.prototype, MeuObj.prototype)
