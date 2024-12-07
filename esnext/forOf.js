for (let letra of 'Cod3r') {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i);
}

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let [c, v] of assuntoMap) {
    console.log(c, v)
}

for (const chave of assuntoMap.keys()) {
    console.log(chave);

}

for (const valor of assuntoMap.values()) {
    console.log(valor);

}

for (let [ch, vl] of assuntoMap.entries()) {
    console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c'])
for (const letra of s) {
    console.log(letra);
}