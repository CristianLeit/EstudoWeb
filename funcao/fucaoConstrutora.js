function Carro(velocidadeMax = 200, delta = 5) {
    //atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function (a = 0) {
        if (velocidadeAtual + delta + a <= velocidadeMax) {
            velocidadeAtual += delta += a
        } else {
            velocidadeAtual = velocidadeMax
        }
    }
    //metodo publico
    this.getVelociadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar(4)
console.log('uno ', uno.getVelociadeAtual(), 'Km/h');

const ferrari = new Carro(350, 20)

ferrari.acelerar(1000)
console.log('ferrari ', ferrari.getVelociadeAtual(), 'Km/h');

console.log();
//Tipo:
console.log(typeof Carro)
console.log(typeof ferrari)