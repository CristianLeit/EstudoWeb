const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log('Executando Tarefa 1!', new Date().getSeconds());
})

setTimeout(() => {
    tarefa1.cancel()
    return console.log('Cancelando Tarefa 1!', new Date().getSeconds());
}, 20000)

// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 7)]
regra.hour = 0
regra.second = 10

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Executando tarefa 2!', new Date().getSeconds());
})