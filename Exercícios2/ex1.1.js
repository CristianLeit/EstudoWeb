function bhaskara(ax2,bx,c){
    const delta = (bx**2)-4*(ax2*c)
    const x1 = (-bx+Math.sqrt(delta))/2*ax2
    const x2 = (-bx-Math.sqrt(delta))/2*ax2

    let resultados = [x1,x2]
    const resultado = delta < 0 ? 'Delta é negativo': resultados;
    return console.log(resultado);
}

bhaskara(1,-2, 1)
bhaskara(1, 3, 2)
bhaskara(3, 1, 2)