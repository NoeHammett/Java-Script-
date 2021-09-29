
/* Sentencia Do While
La sentencia (hacer mientras) crea un bucle que ejecuta una sentencia especificada, hasta
 que la condición de comprobación se evalúa como falsa. La condición se evalúa después de ejecutar la sentencia, dando
  como resultado que la sentencia especificada se ejecute al menos una vez.

  do
  sentencia
while (condición); */

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
  console.log(result);
} while (i < 5);

console.log(result);

/* Referencias
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/do...while
https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view */