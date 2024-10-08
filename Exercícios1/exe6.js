const juros = (ju) => 1+(ju/100)
function simples (c, j, t ){ 
    const montante = c*((1+j/100)*(t/12))
    console.log(`
        Simples
    capital inicial: ${c} 
    montante: ${montante}`)
}
function composto (c, j, t ){ 
    const montante = c * Math.pow((juros(j)),t)
    console.log(`
        Composto
    capital inicial: ${c} 
    montante: ${montante}`)
}
simples(100, 50, 10 )
composto(1000, 2, 2)
