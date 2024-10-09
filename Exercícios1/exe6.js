const juros = (ju) => 1+(ju/100)
function simples (c, j, t ){ 
    const montante = c+(c*(j/100)*t)
    console.log(`
        Simples
    capital inicial: ${c} juros: ${j}%
    montante: ${montante}`)
}
function composto (c, j, t ){ 
    const montante = c * Math.pow(juros(j),t)
    console.log(`
        Composto
    capital inicial: ${c} juros: ${j}%
    montante: ${montante}`)
}
simples(100, 50, 10 )
simples(100000, 10, 4)
composto(1000, 2, 2)
