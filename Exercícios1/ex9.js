function classifNota(nota) {
    if (nota >= 38 && nota % 5 != 0) {
        notaDiv = nota / 10
        nota = Math.round(notaDiv)
        nota = nota * 10
    }
    return console.log(nota);
}
classifNota(47)
classifNota(37)
classifNota(38)