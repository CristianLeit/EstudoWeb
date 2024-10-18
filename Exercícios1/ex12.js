
function fatoria (num){
    let index = num-1
    for (let i = index; i > 0; i--) {
       num *= i
       console.log(num, i, index);
       
    }
    return console.log(num, index);
}
fatoria(10)
