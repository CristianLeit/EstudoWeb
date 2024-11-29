const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

//sicrono...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo);

//assícrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`);
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {/*__dirname é uma constante 
    que esta presente em todos arquivos do node*/
    console.log('Conteúdo da pasta...');
    console.log(arquivos);
})
console.log(__dirname);