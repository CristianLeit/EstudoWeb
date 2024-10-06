let comparaComThis = function(param, explica = '') {
    console.log('this ===', param.toString(), explica,
     `é estritamente igual a this?`, this === param)
}
comparaComThis(global)
comparaComThis(this, 'o this')

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global, 'com bind ')
comparaComThis(obj, 'com bind ')//o this aponta para objeto com o bind

console.log('');


let comparaComThisArrow = (param, ex = '') => console.log('this ===', 
    param.toString(), ex, `é estritamente igual a this do Arrow?`,this===param)
comparaComThisArrow(global, 'global')
comparaComThisArrow(module.exports, 'module exports')

comparaComThisArrow = comparaComThisArrow.bind(obj)
//mesmo com bind a função Arrow não muda a refêrencia do this
comparaComThisArrow(obj, 'obj com bind')
comparaComThisArrow(module.exports,'module com bind')