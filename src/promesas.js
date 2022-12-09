// escribir nuestras variables para poderlas utilizar 
let validacion = true;
export const promesa = new Promise((resolve, reject) => {
        // Las promesas se toman como un if else si no se cumple la primer instruccion se cumple la otra
        if (validacion) {
            resolve();
        } else {
            reject();
        }
    })
    // SE ENCARGA DE TRAER LO QUE SI SE CUMPLIO
    .then(() => {
        document.write('Promesa js');
    })
    // SE ENCARGA DE TRAER LO QUE NO SE CUMPLIO
    .catch(() => {
        document.write('Se ha generado un error');
    });