function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}
/*Diferente da estrutura While, o Do/While não é necessário atribuir um valor inicial para a variável opcao*/

let opcao // <- somente iniciada a variável, sem valor inicial!

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção de escolhida foi ${opcao}`)
}while (opcao != -1)

//while (opcao != -1){
//    opcao = getInteiroAleatorioEntre(-1, 10)
//    console.log(`Opção de escolhida foi ${opcao}`)
//}

console.log('Até a próxima!!!')