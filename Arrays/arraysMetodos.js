const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa saiu
console.log(pilotos);

pilotos.push('Vestappen')
console.log(pilotos);

pilotos.shift() //remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton')
console.log(pilotos);

//splice pode adicionar ou remove elementos

//add
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

//remover
pilotos.splice(3, 1)//massa saiu
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4)// do índice 1 até o 3
console.log(algunsPilotos2);