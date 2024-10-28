const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Rafael']

aprovados.forEach(function (nome, indice, array, x) {
    console.log(`${indice + 1} ${nome}`);
    console.log(x);
})
console.log();

aprovados.forEach(nome => console.log(nome))
console.log();

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)

const arone = paramenter => { paramenter }
aprovados.forEach(arone)
console.log();

aprovados.forEach((nom, ind) => { console.log(ind) })
console.log();
