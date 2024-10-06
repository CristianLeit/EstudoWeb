function area(largura, altura){
    const area = largura * altura
     if (area > 20){
        console.log(`Valor ${area} m² esta acima do permitido!(máximo 20 m²)`)
     }else{
        return area
     }
}
console.log(area(2,2))
console.log(area(2))
console.log(area())
console.log(area(2,3,4,5))
console.log(area(5,5))