function anoBi(n){
    if(n%4 == 0){
        if(n%100 == 0){
            if(n%400 == 0){
                return "é"
            }
            return "num é"
        }
        return "É"
    }
    return 'num é'
}

console.log(anoBi(800));
console.log(anoBi(80));
console.log(anoBi(4860));
console.log(anoBi(500));