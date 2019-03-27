// Variables (caja para guardar algo)

// Tipos de variables

String -> 'Hola' | "Adios"
Number -> 1, 2, 3, 4.5, 10.3546
Boolean -> true / false


// Forma de declarar una variable
var variableString = "Hola";
var number = 10;
var boolean = true;
var variableUndefined = undefined; // falta asignar un valor
var variableNull = null; // asignado un valor nulo
var vacia = "";

// Forma de declarar variables - ECMASCRIPT6 / ES6
let clienteSeleccionado = "prueba"; // variable que va a cambiar de valor
const clientes = "prueba2"; // variable que no va a cambiar su valor

// Asignaciones de variables
let nombre = "Alex"; // seleccionamos let ya que cambiara de "Alex" a "Jordi"
nombre = "Jordi"; 

// Operaciones matemáticas
const plus = 2 + 2;
const minus = 2 - 1;
const multi = 2 * 3;
const div = 4 / 2;
const modulo = 4 % 2;

// Acortar operaciones
let number1 = 4;
let number2 = 6;
let resultat = number1 + number2;
resultat += 7;

// Incrementar o decrementar una variable
let maxNumber = 8;
maxNumber++;
maxNumber += 1; // -> Recomendable
maxNumber--;
maxNumber -= 1; // -> Recomendable

// Diferencia entre ++variable y variable++
let a = 1;
// console.log(a++);
// console.log(a);

let b = 2;
// console.log(++b);
// console.log(b);

// Gestión de string
const string = "Buenas tardes";
// Métodos comunes -> https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Useful_string_methods

// Interpolación strings - ES6
const name = "Alex";
const showName = `Hola, soy ${name}`;
console.log(showName);

// Quítale el coment para probar el consolelog

// console.log("Suma", plus);
// console.log("Resta", minus);
// console.log("Multiplicación", multi);
// console.log("División", div);
// console.log("Módulo", modulo);

// Mostrar en la consola del navegador
// console.log(nombre);
