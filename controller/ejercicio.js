"use strict";

var informacion = true,
    informacion2 = 3 + 3,
    informacion3 = 'Leslie';
var promesa = new Promise(function (resolve, reject) {
  if (informacion) {
    resolve();
  } else {
    reject();
  }
}).then(function () {
  document.write(true);
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