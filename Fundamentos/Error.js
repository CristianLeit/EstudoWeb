function tratarErroELançar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date,
        linha: erro.line

    }
}
function imprimirNomeGrifado(obj){
    try{
        console.log(obj.name.toUpperCase()+'!!!')

    }catch (e){
        tratarErroELançar(e)
    } finally{
        console.log('final')
    }
}

const obj = { nome: 'Roberto'}
imprimirNomeGrifado(obj)