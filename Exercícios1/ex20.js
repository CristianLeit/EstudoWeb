function loop(indice, nota){
    let ced=indice / nota
    return console.log((ced).toFixed() ,'nota(s) de R$', nota.toFixed(2));
}
function cedulas(num) {
    dinheiro = num
    console.log('cedulas de',num);
    for (let index = 0; index <= dinheiro; index++) {
        if (dinheiro>=100) {
            loop(dinheiro, 100)
            dinheiro%=100
        }if(dinheiro>=50){
            loop(dinheiro, 50)
            dinheiro%=50
        }if(dinheiro>=10){
            loop(dinheiro, 10)
            dinheiro%=10
        }if(dinheiro>=5){
            loop(dinheiro, 5)
            dinheiro%=5
        }if(dinheiro>=1){
            loop(dinheiro, 1)
            dinheiro%=1
        }
    }
    
}
cedulas(100)
console.log();
cedulas(1151)
console.log();
cedulas(578)
console.log();
cedulas(339)

//fazer com o switch