const anonimo = process.argv.indexOf('-a') !== -1
//console.log(anonimo)

if (anonimo) {
    process.stdout.write('Fala Anônima!\n')//saida anonima
    process.exit()
} else {
    process.stdout.write('iNFORME O SEU NOME: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\r\n', '')

        process.stdout.write(`Faaaaala ${nome}!!\r\n`)
        process.exit()
    })
}