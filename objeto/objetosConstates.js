//pessoa(constante) -> 123(endereço de memória) -> {...}(objeto)
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}
const pessoa2 = pessoa
pessoa2.nome = 'piripoca'
console.log(pessoa)

Object.freeze(pessoa)//transforma em uma constante plena

pessoa.nome = 'Maria'
pessoa.rua = 'Rua ABC'
delete pessoa.nome
console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'João' })
pessoaConstante.nome = 'Cacete'
console.log(pessoaConstante);