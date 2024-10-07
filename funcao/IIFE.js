//IIFE -> Immediately Invoked Function Expression

/*const valor = 110
const porcent = 0.3 // não alcança essa função, porque é escopo local*/

//função auto invocada
(function () {
    const valor = 110
    const porcent = 30
    const valorDoPorcent = porcent/100

    console.log(`30% de 110 é ${valor * valorDoPorcent}`);
    console.log(`acréscimo de 30% no 110 é ${valor * valorDoPorcent + valor}`);
    console.log(`decréscimo de 30% no 110 é ${valor - valor * valorDoPorcent}`);
    console.log('Foge do escopo mais abragente é invocação imediata!');
})()