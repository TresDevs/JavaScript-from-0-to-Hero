// Arrays

const marcas = ["fiat", "ford", "ferrari"];
console.log(marcas.length); // nos devolvera 3

// Solo añadir
marcas.push("BMW"); // Añade un valor al final de la array

marcas.unshift("MarcaPEPE"); // Añade el valor al inicio del array

// Añadir y asignar
const agregamosUltima = marcas.push("Renault"); // Nos devuelve["fiat", "ford", "ferrari", "Renault"]

// Eliminar
marcas.pop(); // Elimina el ultimo valor de la array

marcas.shift("Marca2"); // Eliminar el primer valor del array

// Arrays multidimensionales
const multidimensional = [1, 2, [3, 4], 5, 6];

// Acceder de forma simple a un elemento de un array
const ultima = marcas[2]; // Devuelve ferrari ya que esta en la tercera posicion [0,1,2]