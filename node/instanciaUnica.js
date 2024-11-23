/*o Node.js faz cache de módulos e 
pode ser usado para implementar um padrão singleton.*/
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}