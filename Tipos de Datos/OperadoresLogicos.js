
/* Operadores lógicos
Hay tres operadores lógicos en JavaScript: 
*   || (O)
*   && (Y)
*   ! (NO)


    El operador OR se representa con dos símbolos de linea vertical:
result = a || b;

Evalúa los operandos de izquierda a derecha.
Para cada operando, convierte el valor a booleano. Si el resultado es true, se detiene y retorna el valor original de ese operando.
Si todos los operandos han sido evaluados (todos eran false), retorna el ultimo operando.

    El operador AND encuentra el primer valor falso
result = value1 && value2 && value3;

Evalúa los operandos de izquierda a derecha.
Para cada operando, los convierte a un booleano. Si el resultado es false, se detiene y retorna el valor original de dicho operando.
Si todos los operandos han sido evaluados (todos fueron valores verdaderos), retorna el último operando.


    El operador booleano NOT se representa con un signo de exclamación !.

La sintaxis es bastante simple:
result = !value;

El operador acepta un solo argumento y realiza lo siguiente:
Convierte el operando al tipo booleano: true/false.
Retorna el valor contrario.
*/

let hour = 15;
let isWeekend = false;

if (hour < 10 || hour > 18 || isWeekend) {
  console.log("La oficina esta cerrada");
}else{
    console.log("La oficina esta abierta")
}


const a = 3;
const b = -2;

console.log(a > 0 && b < 0);

console.log(!false);

//Operador Ternario 
let comparacion = (a<b) ? "Es mayor" : "Es menor";
console.log(comparacion);



/* 
Referencias
https://es.javascript.info/logical-operators 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Conditional_Operator*/