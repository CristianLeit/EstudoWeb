function maiorMenor (vetor) {
    let maior = 0
    let menor = 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    for (let i = 0; i < vetor.length; i++){
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        
    }
    return [maior, menor]
}

vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))