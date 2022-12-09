//  crear  nuestra variable para utilizarla dentro de nuestor if else
let informacion = true,
    informacion2 = 3 + 3,
    informacion3 = 'Leslie'

//  se utiliza la clase promesa 
const promesa = new Promise((resolve, reject) => {
    if (informacion) {
        resolve();
    } else {
        reject();
    }
    // aqui se utilizan la instruccion que quieras utilizar .then es para traer la intruccion  que se ejecutara correctament
}).then(() => {
    document.write(true)
        //  la utilizamos en dado caso que la instruccion no se ejecute como deseamos.
}).catch(() => {
    document.write(`<br> se ha generado un error`)
});
const promesa1 = new Promise((resolve, reject) => {
    if (informacion2) {
        resolve();
    } else {
        reject();
    }
}).then(() => {
    document.write(`<br> el resultado es ` + 6)

}).catch(() => {
    document.write(`<br> no es el correcto`)

});
const promesa2 = new Promise((resolve, reject) => {
    if (informacion3) {
        resolve();
    } else {
        reject();
    }
}).then(() => {
    document.write(`<br>leslie`)

}).catch(() => {
    documen.write(`<br> no es el nombre correcto`)
})