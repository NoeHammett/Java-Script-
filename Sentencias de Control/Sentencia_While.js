
/* Sentencia While
Crea un bucle que ejecuta una sentencia especificada mientras cierta condición se evalúe como verdadera. 
Dicha condición es evaluada antes de ejecutar la sentencia

while (condicion)
  sentencia */

let n=0;
while (n < 3) {
    console.log(n);
    n ++;
} 
console.log("Fin While "+n);

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
  console.log(result);
} while (i < 5);

console.log(result);



/* Referencias
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/while
https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view */