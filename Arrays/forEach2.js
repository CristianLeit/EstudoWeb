Array.prototype.forEach2 = function (callback) {
    for (let index = 0; index < this.length; index++) {
        callback(this[index], index, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Rafael']

aprovados.forEach2(function (nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`);
    console.log(array);
})