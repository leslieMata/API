export default class Operador {
    constructor(dato) {
        this.dato = dato
    }
    validacion() {
            let operador_ternario = this.dato > 2 ? `Es mayor a 2!` : `Ès menos a 2!`;
            document.write(`el numero ${this.dato > 2 ? `es mayor a 2!` : `es menor a 2 !`}`);
        if (!this.dato) {
        document.write("Es verdadero");
        } else {
        document.write(`Es falso`);
         return typeof(this.dato) != "number" ? (this.dato == null ? `El valor es nulo` : `debes ingresar un numero`) : (this.dato > 2 ? `Es mayor a 2!` : `Es menor a 2!`);
        return typeof(this.dato) != "number" ? (this.dato == null ? `El valor es nulo` : (this.dato == 9 ? `Es un dato` : (this.dato == "hola" ? `Es una cadena` : (this.dato == undefined ? ` Es undefined` : (this.dato == Object ? `Es un objeto` : `Dato diferente`))))) : `Anota un numero`;
    }


}
//   validar un tipo de datop ingresado  identificador o palabra clave
// nulo, vacio, numero, cadena, indefinido  y objeto



const ternario = new Operador(hola);
document.write(ternario.validacion());