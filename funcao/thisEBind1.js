const pessoa ={
    saudacao: 'Boa dia!',
    falar(){
        console.log(this.saudacao, )
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

const data = new Date
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


pessoa.falar(pessoa.
    saudacao =`boa tarde são ${data.getHours()} horas e ${data.
        getMinutes()} minutos`)