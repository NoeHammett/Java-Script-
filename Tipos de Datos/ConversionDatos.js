
/* Conversion de datos

A String
La conversión de cadena ocurre cuando necesitamos la forma de cadena de un valor.

Por ejemplo, console.log(valor) lo hace para mostrar el valor.

También podemos usar una función String(valor) 


A Número
La conversión numérica ocurre en funciones matemáticas y expresiones automáticamente.
Podemos usar una función de Number(valor) para convertir explícitamente un valor

A Boolean
La conversión booleana es la más sencilla.
Ocurre en operaciones lógicas pero, también se puede realizar manualmente con la llamada de Boolean(valor).

Los valores que están intuitivamente “vacíos”, como 0, una cadena vacía, nula, indefinida y NaN se vuelven falsos.
*/

// Conversión a String
let valor = true;
console.log(valor);
console.log(typeof valor);

value = String(valor); 
console.log(typeof value);

// Conversión a Number

let str = "123";
console.log(typeof str); 

let num = Number (str); 
console.log (typeof num);
console.log (num);

// Console a Boolean

console.log(Boolean (1));
console.log(Boolean (0));

console.log(Boolean ("Hola"));
console.log(Boolean (""));



function milliseconds(x) {
    if (isNaN(x)) {
      return 'Not a Number!';
    }
    return x * 1000;
  }
  
  console.log(milliseconds('100F'));  
  console.log(milliseconds('0.0314E+2'));

/* Referencias
https://www.codigofuente.org/tipos-datos-conversiones-javascript/ 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/isNaN*/