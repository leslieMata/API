let informacion = true,
    informacion2 = 3 + 3,
    informacion3 = 'Leslie'

const promesa = new Promise((resolve, reject) => {
    if (informacion) {
        resolve();
    } else {
        reject();
    }
}).then(() => {
    document.write(true)
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