/* Operadores de comparación

Operador	                         Descripción	                                                    
Igual (==)	                         Devuelve true si los operandos son iguales.	3 == var1                  
No es igual (!=)	                 Devuelve true si los operandos no son iguales.	                         
Estrictamente igual (===)	         Devuelve true si los operandos son iguales y del mismo tipo
Desigualdad estricta (!==)         	 Devuelve true si los operandos son del mismo tipo pero no iguales, o son de diferente tipo.
Mayor que (>)	                     Devuelve true si el operando izquierdo es mayor que el operando derecho.	
Mayor o igual que (>=)	             Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
Menor que (<)	                     Devuelve true si el operando izquierdo es menor que el operando derecho.
Menor o igual (<=)                 	 Devuelve true si el operando izquierdo es menor o igual que el operando derecho. 
*/

let a=3, b=3,c=4

let igual = a==b && a>c;
console.log(igual)

let noIgual = a!=b;
console.log(noIgual);

let estrictamenteIgual = a===b;
console.log(estrictamenteIgual);

let desigualdadEStricta = a!==b;
console.log(desigualdadEStricta);

let mayor = a>c;
console.log(mayor);

let menor = a<c;
console.log(menor);

let mayorIgual = a>=c;
console.log(mayorIgual);

let menorIgual = a<=c;
console.log(menorIgual  );

let x=23;
if(x % 2 == 0){
    console.log("Numero par");
}else{
    console.log("Numero Impar")
}


/* Referencias
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_Operators#comparacion
https://drive.google.com/file/d/11Qd_2a9YfHq7Yt4IGLXwWRs6OFpSu-6o/view */