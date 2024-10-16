const pontoJogo = [10,20,20,8,25,3,0,30,1]
let anterior = 0
var NumVrecorde = 0
let recorde = 0
let pior
for (let i = 0; i < pontoJogo.length; i++) {
    if(i !=0 && anterior < pontoJogo[i]){
        pior = i  
    }
    if(i !=0 && recorde < pontoJogo[i]){
        recorde = pontoJogo[i]
        NumVrecorde++
    }
    anterior = pontoJogo[i]
}
console.log(NumVrecorde, pior)