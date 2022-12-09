"use strict";

// escribir nuestras variables para poderlas utilizar 
var validacion = true;
var promesa = new Promise(function (resolve, reject) {
  // Las promesas se toman como un if else si no se cumple la primer instruccion se cumple la otra
  if (validacion) {
    resolve();
  } else {
    reject();
  }
}) // SE ENCARGA DE TRAER LO QUE SI SE CUMPLIO
.then(function () {
  document.write('Promesa js');
}) // SE ENCARGA DE TRAER LO QUE NO SE CUMPLIO
["catch"](function () {
  document.write('Se ha generado un error');
});