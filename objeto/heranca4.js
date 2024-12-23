function MeuObjeto() { }
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto.prototype === obj1.__proto__);
console.log(Object.prototype === obj1.__proto__);

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function () {
    console.log(`Bom dia! ${this.nome}`)
}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = "obj3"
obj1.falar()

//Resumindo
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);//(uma instância a partir de uma função)
//Quando um objeto é instanciado a partir de uma função eles são iguais
console.log(MeuObjeto.__proto__ === Function.prototype);//A função também tem um atributo "__proto__" esse atributo aponta para "Funtion.prototype"
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);