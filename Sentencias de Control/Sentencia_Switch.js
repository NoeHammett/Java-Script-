
/* Sentencia Switch
La declaración switch evalúa una expresión, comparando el valor de esa expresión con una instancia case, y
ejecuta declaraciones asociadas a ese case, así como las declaraciones en los case que siguen.

La declaración break es opcional y está asociada con cada etiqueta de case y asegura que el programa salga del switch una vez que
se ejecute la instrucción coincidente y continúe la ejecución en la instrucción siguiente. 
Si se omite el  break  el programa continúa la ejecución en la siguiente instrucción en la declaración de switch .
*/

let numero = "1";
switch (Number(numero) ) {
    case 1:
      console.log('Es el numero 1');
      break;
    case 2:
        console.log('Es el numero 2');
      break;
    case 3:
        console.log('Es el numero 4');
      break;
    case 4:
        console.log('Es el numero 4');
      break;
    case 5:
        console.log('Es el numero 5');
      break;
    default:
      console.log('Numero no disponible');
  }
  

  /* Referencias
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/switch
  https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view */  
