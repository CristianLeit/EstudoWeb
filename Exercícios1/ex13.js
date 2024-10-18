function diaUtil(key) {
    switch (Math.floor(key)) {
        case 1: 
             return "Final de semana"
        case 2:
        case 3:
        case 4:
        case 5:
        case 6: 
            return "Dia útil"
        case 7:
            return "Final de semana"
        default:
            return "Dia inválido!"
    }
}
console.log(diaUtil(5));
console.log(diaUtil());
console.log(diaUtil(7));
console.log(diaUtil(1));
console.log(diaUtil(10));