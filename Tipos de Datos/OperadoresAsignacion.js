/* Operador de Asignación Simple
Un operador de asignación asigna un valor a su operando izquierdo basándose en el valor de su operando derecho.
El operador de asignación simple es igual (=), que asigna el valor de su operando derecho a su operando izquierdo. 
Es decir, x = y asigna el valor de y a x.

Operadores de Asigación Compuestos
Nombre	                         Operador abreviado	        Significado
Asignación de adición	            x += y	                x = x + y
Asignación de resta	                x -= y	                x = x - y
Asignación de multiplicación	    x **= y	                x = x * y
Asignación de división	            x /= y	                x = x / y
Asignación de residuo	            x %= y	                x = x % y
Asignación de exponenciación	    x **= y	                x = x ** y
Asignación de desplazamiento a la izquierda	x <<= y	        x = x << y
Asignación de desplazamiento a la derecha	x >>= y	        x = x >> y
Asignación de desplazamiento a la derecha sin signo	x >>>= y	x = x >>> y
Asignación AND bit a bit	        x &= y                   x = x & y
Asignación XOR bit a bit	        x ^= y	                x = x ^ y
Asignación OR bit a bit	            x |= y	                x = x | y
Asignación AND lógico	            x &&= y	                x && (x = y)
Asignación OR lógico	            x ||= y	                x || (x = y)
Asignación de anulación lógica	    x ??= y	                x ?? (x = y)

*/

let a = 2; 
let b = 5;
a +=3; // a = a+3;
console.log(a);

a -=2;
console.log(a);

a**=a;
console.log(a);

a /= 3;
console.log(a);

a %= 2;
console.log(a);


/* Referencias
https://www.uv.es/jac/guia/jscript/javascr04.htm
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators
https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view */