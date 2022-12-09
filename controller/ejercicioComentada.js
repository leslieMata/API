"use strict";

//  crear  nuestra variable para utilizarla dentro de nuestor if else
var informacion = true,
    informacion2 = 3 + 3,
    informacion3 = 'Leslie'; //  se utiliza la clase promesa 

var promesa = new Promise(function (resolve, reject) {
  if (informacion) {
    resolve();
  } else {
    reject();
  } // aqui se utilizan la instruccion que quieras utilizar .then es para traer la intruccion  que se ejecutara correctament

}).then(function () {
  document.write(true); //  la utilizamos en dado caso que la instruccion no se ejecute como deseamos.
})["catch"](function () {
  document.write("<br> se ha generado un error");
});
var promesa1 = new Promise(function (resolve, reject) {
  if (informacion2) {
    resolve();
  } else {
    reject();
  }
}).then(function () {
  document.write("<br> el resultado es " + 6);
})["catch"](function () {
  document.write("<br> no es el correcto");
});
var promesa2 = new Promise(function (resolve, reject) {
  if (informacion3) {
    resolve();
  } else {
    reject();
  }
}).then(function () {
  document.write("<br>leslie");
})["catch"](function () {
  documen.write("<br> no es el nombre correcto");
});