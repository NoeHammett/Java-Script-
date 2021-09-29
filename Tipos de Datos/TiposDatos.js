/* Ejemplos de tipos de datos en 
JS 

En Javascript existen 7 tipos de datos
String: Cadenas de texto.
Number: Valores numéricos.
Boolean: Representa una entidad lógica y puede tener dos valores: true y false.
null: Es un valor asignado tiene el valor de “no valor”.
undefined: Una variable a la que no se le ha asignado ningún valor tiene el valor undefined.
Symbol: Symbol es un tipo de datos cuyos valores son únicos e inmutables. Dichos valores pueden ser utilizados
    como identificadores (claves) de las propiedades de los objetos. Cada valor del tipo Symbol tiene asociado un valor del
    tipo String o Undefined que sirve únicamente como descripción del símbolo.
Object: Un valor en memoria al que podemos acceder por un identificador.
*/


// Tipo de dato String
var nombre =  "NOMBRE"; 
console.log(nombre); 

nombre = 10;
console.log(nombre); 

//Tipo de dato Numero
var numero = 1000;
console.log(typeof numero); 
console.log( numero); 

//Tipo de dato Objeto
var Persona = {
    nombre:"Noe",
    edad: 24,
    carrera:"Software Enginner" 
}
console.log(Persona); 


//Tipo de dato Booleano
var bandera = true;
console.log(bandera); 

//tipo de dato Funcion
function hola(){}
console.log(typeof hola); 
console.log(hola);

//tipo de dato Symbol
var Simbolo = Symbol("Simbolo");
console.log(Simbolo); 

//Tipo de dato Clase (function)
class PruebaPersona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}
console.log(typeof PruebaPersona);
console.log(PruebaPersona);

//Tipo de dato Undefined
var x;
console.log(x);

//Tipo de dato Null

var y= null;
console.log(y); //Null se comporta como tipo de dato Object

//Tipo de dato Array
var autos = ["Mercedes","Audi","Ferrari"];
console.log(autos);
console.log(typeof autos);




/* Referencias 
https://www.netinetidesign.com/post/tipos-de-datos-en-javascript/ 
https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view
*/