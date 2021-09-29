
/* Declaración y diferencia de los tipos de variables
let
const
var 

Variables var
El alcance es global cuando una variable var se declara fuera de una función. 
Esto significa que cualquier variable que se declare con var fuera de un bloque de funciones está disponible para su uso en
todo el programa.

var tiene un alcance de función cuando se declara dentro de una función. 
Esto significa que está disponible y se puede acceder solo dentro de esa función.

Variables let
A diferencia de var, una variable let no se puede volver a declarar dentro de su alcance. 
Al usar let, no tiene que molestarse si has usado el mismo nombre para una variable anteriormente, 
ya que la variable solo existe dentro de su alcance.

Variables const
Una variable con const debe tener un valor al ser creada.
No se pueden re-asignar los valores.

REGLAS PARA DEFINIR UNA VARIABLE
El nombre de una variable también se conoce como identificador y debe cumplir las siguientes normas:

Sólo puede estar formado por letras, números y los símbolos $ (dólar) y _ (guión bajo).
El primer carácter no puede ser un número.

*/

let nombre;
let _Nombre;
let $Nombre;
// let 1NOmbre;


var nombre = 'Noe';

if(nombre) {
   let nombre = 'Samuel';
   console.log(nombre, ' dentro del IF');
}

console.log(nombre, ' fuera del IF');


const apellido = "Lopez"
apellido =  "TEST"; //Error al momento de reasignar una variable const
;

/* Referencias
https://estradawebgroup.com/Post/Var--Let-y-Const-en-JavaScript---cual-es-la-diferencia-/20375
https://codigoconjuan.com/diferencias-var-let-y-const/
https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view
https://uniwebsidad.com/libros/javascript/capitulo-3/variables */