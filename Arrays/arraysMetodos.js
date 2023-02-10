const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa saiu
console.log(pilotos);

pilotos.push('Vestappen')
console.log(pilotos);

pilotos.shift() //remove primeiro
console.log(pilotos);

pilotos.unshift('Hamilton')
console.log(pilotos);

//splice pode add ou remove

//add
pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos);

//remover
pilotos.splice(3, 1)
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2);