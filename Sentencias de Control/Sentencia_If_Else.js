
/* Sentencia If Else 
Ejecuta una sentencia si una condición específicada es evaluada como verdadera. 
Si la condición es evaluada como falsa, otra sentencia puede ser ejecutada. 

Se pueden anidar tantos else se rquieran, pero acompañados del if como seria a continuación:
if (condición1)
   sentencia1
else if (condición2)
   sentencia2
else if (condición3)
   sentencia3
...
else
   sentenciaN
*/

let a=24, b=10;
if(a<b){
    console.log(a + " Es menor que "+b);
}else{
    console.log(a + " Es mayor que "+b);
}

//Con operador ternario
let comparacion = (a<b) ? "Es menor" : "Es mayor";
console.log(comparacion);


let hora = 18;
let dia;

if(hora  >=6 && hora <=11){
    dia= "Buenos Días";
}else if(hora  >=12 && hora <=18){
    dia= "Buenas Tardes";
}else if(hora  >=19 && hora <=24){
    dia= "Buenas Noches";
}else if(hora  >=0 && hora <=5){
    dia= "Madrugada";
}else {
    dia= "Hora Incorrecta";
}
console.log(dia);


   /* Referencias
   https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view
   https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/if...else */