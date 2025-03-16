//WHILE EJEMPLO
let i= 0;
let x = 0;


while(i<10){
    i++;
    x+=i;
    console.log(`El valor de i es:${i} y el valor de x es: ${x}`);
}


//EJEMPLO 2 WHILE 
let a = 0;

while (a < 4) {
a++;
console.log(a);
}


// DO WHILE EJEMPLO

let b=0;

do{
    console.log(b);
    b++;
} while(b<5);

//Ejercicio 1:
//Escribe un programa que pida al usuario que ingrese un número mayor que 0. 
//Si el usuario ingresa un número menor o igual a 0, se le pedirá que lo intente nuevamente. Usa tanto while como do-while para observar las diferencias.

let num = parseInt(prompt("Ingresa un número mayor que 0:")); // Pedimos al usuario un número

while (num <= 0) { 
    console.log(`El número ${num} NO es correcto. Inténtalo de nuevo.`);
    num = parseInt(prompt("Ingresa un número mayor que 0:")); 
}
console.log(`El número ${num} es correcto.`);


//Ejercicio 2: Suma de números pares con while
//Crea un programa que sume todos los números pares entre 1 y 20 (inclusive) usando un bucle while. Al final, imprime el resultado de la suma.

let n = 1;
let suma=0;

while(n <=20){

    n++
    
    if(n%2 ===0){

        suma += n; 
    }
   
}

console.log (suma);



//Ejercicio 2: Números hasta encontrar un múltiplo de 7 con do...while
//Crea un programa que, comenzando desde 1, imprima los números hasta que encuentre un múltiplo de 7. 
//Usa un bucle do...while. Una vez que el múltiplo se encuentra, imprime un mensaje indicando el número encontrado.

let z = 7;
let multiplo = 0;

do{
    if(z%7 === 0){

        multiplo = z
    }
    z++;

}while(multiplo === 0);

console.log (multiplo);