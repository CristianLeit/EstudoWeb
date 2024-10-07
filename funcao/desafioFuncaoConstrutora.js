class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Classe: Meu nome ${this.nome}`)
    }
}
const p1 = new Pessoa('João')
p1.falar()

function getPessoa(nome){
    this.nome = nome
    this.falar = function(){
        return console.log(`Func Const: Meu nome ${this.nome}`)
    }
}
const p2 = new getPessoa('João')
p2.falar()


function Pessoa24(/*nomi*/){
    //this.nomi
    this.falar = function(nomi){
       console.log('Func Const24: Meu nome é',nomi);     
   }
}
const p3 = new Pessoa24('ju')
p3.falar('ju')
console.log(p3.nomi);// undefined porque o nomi não esta referenciado