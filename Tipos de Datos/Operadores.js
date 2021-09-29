/* 
 ARITMÉTICOS
+	Adición	Suma dos números juntos.	6 + 9
-	Resta	Resta el numero de la derecha del de la izquierda.	20 - 15
*	Multiplicación	Multiplica dos números juntos.	3 * 7
/	División	Divide el número de la izquierda por el de la derecha.	10 / 5
Residuo (%)	Operador binario. Devuelve el resto entero de dividir los dos operandos.	12 % 5 devuelve 2.
Operador de exponenciación (**) */

//Operaciones Aritmeticas
let a = 5, b = 2;
let suma = a+b;
console.log("Resultado de la suma",suma);
let resta = a-b;
console.log("Resultado de la resta",resta);
let multiplcacion = a*b;
console.log("Resultado de la multiplicacion",multiplcacion);
let division = a/b;
console.log("Resultado de la division",division);
let residuo = a%b;
console.log("Resultado del residuo",residuo);
let exponente = a**b;
console.log("Resultado del exponente",exponente);


/* Operadores Aritméticos
Incremento (++)	Operador unario. Agrega uno a su operando. Si se usa como operador prefijo (++x), devuelve el valor de su operando después de agregar uno; si se usa como operador sufijo (x++), devuelve el valor de su operando antes de agregar uno.	Si x es 3, ++x establece x en 4 y devuelve 4, mientras que x++ devuelve 3 y , solo entonces, establece x en 4.
Decremento (--)	Operador unario. Resta uno de su operando. El valor de retorno es análogo al del operador de incremento.	Si x es 3, entonces --x establece x en 2 y devuelve 2, mientras que x-- devuelve 3 y, solo entonces, establece x en 2.
Negación unaria (-)	Operador unario. Devuelve la negación de su operando.	Si x es 3, entonces -x devuelve -3.
Positivo unario (+)	Operador unario. Intenta convertir el operan do en un número, si aún no lo es.	+"3" devuelve 3.
+true devuelve 1. */


let preIncremento = ++b;
console.log("preIncremento", preIncremento);
let postIncremento = a++;
console.log("postIncremento", postIncremento);

let decremento = --b;
console.log("decremento", decremento);
let postDecremento = a--;
console.log("postDecremento", postDecremento);




/* Referencias
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
https://uniwebsidad.com/libros/javascript/capitulo-3/operadores
https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view */