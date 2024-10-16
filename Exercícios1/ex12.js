var fator = 0
function fatoria (num){
    let index = num-1
    for (let i = index; i > 0; i--) {
       num *= i
    }
    return console.log(num);
}
fatoria(10)
