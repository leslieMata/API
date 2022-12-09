/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch.js */ \"./src/fetch.js\");\n// import { promesa } from \"./promesas\";\n// import Operador from \"./ternario\";\n// const ternario = new Operador(1);\n// document.write(ternario.validacion());\n\nvar api = new _fetch_js__WEBPACK_IMPORTED_MODULE_0__.Consulta();\napi.consulta();\napi.consultarEpisodio();\napi.consultarUbicacion();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Consulta\": () => (/* binding */ Consulta)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Consulta = /*#__PURE__*/function () {\n  function Consulta() {\n    _classCallCheck(this, Consulta);\n  }\n\n  _createClass(Consulta, [{\n    key: \"consulta\",\n    value: function consulta() {\n      fetch(\"https://rickandmortyapi.com/api/character\").then(function (respuesta) {\n        return respuesta.json();\n      }).then(function (respuesta) {\n        console.log(respuesta);\n        var results = respuesta.results;\n        var personajes = \"\";\n        var contador = 0;\n        results.map(function (personaje) {\n          // console.log(personaje);\n          var created = personaje.created,\n              gender = personaje.gender,\n              id = personaje.id,\n              image = personaje.image,\n              location = personaje.location,\n              name = personaje.name,\n              origin = personaje.origin,\n              species = personaje.species,\n              status = personaje.status,\n              url = personaje.url;\n          if (contador < 5) personajes += \"\\n                        <div class=\\\"card\\\">\\n                            <div class=\\\"card-title text-center\\\">\\n                                <h1 class=\\\"display-4\\\">\".concat(name, \" | No. \").concat(id, \"</h1>\\n                            </div>\\n                            <div class=\\\"card-body\\\">\\n                                <div class=\\\"row\\\">\\n                                    <div class=\\\"col-md-8 align-self-center\\\">\\n                                        <p><b>Creacion: </b>\").concat(created, \"</p>\\n                                        <p><b>Genero: </b>\").concat(gender, \"</p>\\n                                        <p><b>Localizacion: </b>\").concat(location.name, \"</p>\\n                                        <p><b>Origen: </b>\").concat(origin.name, \"</p>\\n                                        <p><b>Especie: </b>\").concat(species, \"</p>\\n                                        <p><b>Estado: </b>\").concat(status, \"</p>\\n                                    </div>\\n                                    <div class=\\\"col-md-4 align-self-center\\\">\\n                                        <img class=\\\"img-fluid mb-3\\\" src=\\\"\").concat(image, \"\\\" alt=\\\"\\\">\\n                                        <a class=\\\"btn btn-outline-primary\\\" href=\\\"\").concat(url, \"\\\">Ver m\\xE1s</a>\\n                                    </div>\\n                                </div>\\n                            </div>\\n                        </div>\\n                    \");\n          contador++;\n        });\n        $(\"#personajes\").html(personajes);\n      })[\"catch\"](function (error) {\n        // se atrapa un error en caso de que exista\n        console.log(error); // se muestra el error\n      }); // .then((respuesta) => {\n      //     if (respuesta.status == 200) {\n      //         console.log(\"Todo bien\");\n      //         console.log(respuesta.json());\n      //     }\n      //     if (respuesta.status == 404) {\n      //         console.log(\"No se encontro la pagina\");\n      //     }\n      //     if (respuesta.status == 500) {\n      //         console.log(\"Error de servidor\");\n      //     }\n      // })\n      // .catch();\n    }\n  }, {\n    key: \"consultarEpisodio\",\n    value: function consultarEpisodio() {\n      fetch(\"https://rickandmortyapi.com/api/episode\").then(function (respuesta) {\n        return respuesta.json();\n      }).then(function (respuesta) {\n        console.log(respuesta);\n        var results = respuesta.results;\n        var episodios = \"\";\n        var contador = 0;\n        results.map(function (episodio) {\n          // console.log(personaje);\n          var created = episodio.created,\n              id = episodio.id,\n              name = episodio.name,\n              air_date = episodio.air_date,\n              episode = episodio.episode,\n              characters = episodio.characters,\n              url = episodio.url;\n          if (contador < 5) episodios += \"\\n                        <div class=\\\"card\\\">\\n                            <div class=\\\"card-title text-center\\\">\\n                                <h1 class=\\\"display-4\\\"> Episodio No. \".concat(id, \"</h1>\\n                            </div>\\n                            <div class=\\\"card-body\\\">\\n                                <div class=\\\"row\\\">\\n                                    <div class=\\\"col-md-8 align-self-center\\\">\\n                                        <p><b>Creacion: </b>\").concat(created, \"</p>\\n                                        <p><b>Fecha de estreno: </b>\").concat(air_date, \"</p>\\n                                        <p><b>Nombre del episodio: </b>\").concat(name, \"</p>\\n                                        <p><b>Temporada: </b>\").concat(episode, \"</p>\\n                                    </div>\\n                                    <div class=\\\"col-md-4 align-self-center\\\">\\n                                        <a class=\\\"btn btn-outline-primary\\\" href=\\\"\").concat(url, \"\\\">Ver m\\xE1s</a>\\n                                    </div>\\n                                </div>\\n                            </div>\\n                        </div>\\n                    \");\n          contador++;\n        });\n        $(\"#episodios\").html(episodios);\n      })[\"catch\"](function (error) {\n        // se atrapa un error en caso de que exista\n        console.log(error); // se muestra el error\n      });\n    }\n  }, {\n    key: \"consultarUbicacion\",\n    value: function consultarUbicacion() {\n      fetch(\"https://rickandmortyapi.com/api/location\").then(function (respuesta) {\n        return respuesta.json();\n      }).then(function (respuesta) {\n        console.log(respuesta);\n        var results = respuesta.results;\n        var ubicaciones = \"\";\n        var contador = 10;\n        results.map(function (ubicacion) {\n          // console.log(ubicacion);\n          var created = ubicacion.created,\n              id = ubicacion.id,\n              name = ubicacion.name,\n              type = ubicacion.type,\n              dimension = ubicacion.dimension,\n              residents = ubicacion.residents,\n              url = ubicacion.url;\n          if (contador > 9) ubicaciones += \"\\n                        <div class=\\\"card\\\">\\n                            <div class=\\\"card-title text-center\\\">\\n                                <h1 class=\\\"display-4\\\">\".concat(name, \" | No. \").concat(id, \"</h1>\\n                            </div>\\n                            <div class=\\\"card-body\\\">\\n                                <div class=\\\"row\\\">\\n                                    <div class=\\\"col-md-8 align-self-center\\\">\\n                                        <p><b>Localizacion: </b>\").concat(type, \"</p>\\n                                        <p><b>Dimension: </b>\").concat(dimension, \"</p>\\n                                        <p><b>Creacion: </b>\").concat(created, \"</p>\\n                                    </div>\\n                                    <div class=\\\"col-md-4 align-self-center\\\">\\n                                        <a class=\\\"btn btn-outline-primary\\\" href=\\\"\").concat(url, \"\\\">Ver m\\xE1s</a>\\n                                    </div>\\n                                </div>\\n                            </div>\\n                        </div>\\n                    \");\n          contador--;\n        });\n        $(\"#ubicaciones\").html(ubicaciones);\n      })[\"catch\"](function (error) {\n        // se atrapa un error en caso de que exista\n        console.log(error); // se muestra el error\n      });\n    }\n  }]);\n\n  return Consulta;\n}();\n\n//# sourceURL=webpack:///./src/fetch.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;