console.log(soma(3, 4))
//console.log(sub(3, 4)) erro ao chamar antes a function expression
//console.log(mult(3, 4)) "             " named function expression

//fuction declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}

// named function expression
const mult = function mult(x, y){
    return x * y
}