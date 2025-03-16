
// EJEMPLOS FUNCIONES BASICOS 
function saludar (nombre){

   console.log (`Hola ${nombre}`)
}

saludar('Pablo');

saludar (`Andres`);

//EJEMPLO FUNCION SUMAR

function suma ( a, b){

    x = a + b;
    return console.log(`La suma de ${a} y ${b} es = ${x} `)
}

suma (5,6)

//ACTIVIDAD 1 :
//Crea una función llamada esPrimo que reciba un número como parámetro y devuelva true si el número es primo, o false si no lo es.
//Un número primo es aquel que solo es divisible por 1 y por sí mismo (por ejemplo, 2, 3, 5, 7, 11, etc.).
//Implementa la lógica dentro de la función para comprobar si el número cumple esta condición.
//Fuera de la función, pide al usuario (o define directamente) un número, llama a la función esPrimo, y muestra en la consola si el número es primo o no.


function esPrimo(num){

    for (let i= 2; i < num ;i++){
        if (num%i === 0){
            return console.log  ( `El número ${num} NO es primo`)
        }
    }
         return console.log  ( `El número ${num} es primo`)
}

esPrimo(9);



//UNA FUNCION AÑADIDA QUE ES UTIL

const invertirCadena = cadena => cadena.split("").reverse().join(""); // INVIERTE CADENAS 

//split(''):
/*Convierte "hola" en un array de caracteres:
['h', 'o', 'l', 'a']

reverse():
Invierte el orden del array:
['a', 'l', 'o', 'h']

join(''):
Une los caracteres del array en una sola cadena:
"aloh"*/


let cadena = "Hola";
console.log("Cadena:", invertirCadena(cadena));


//Ejercicio: Comprobar si una palabra es un palíndromo
//Crea una función llamada esPalindromo que reciba una cadena de texto como parámetro y devuelva true si la palabra es un palíndromo o false si no lo es.
//Un palíndromo es una palabra que se lee igual al derecho y al revés (por ejemplo: "ana", "oso", "radar").

function esPalindromo (texto='hola'){

    const invertirCadena = texto => texto.split("").reverse().join(""); 

    if ( invertirCadena(texto) === texto){
        return true + console.log (`${texto} es una palabra palindromo`)
    }else{
        return false + console.log (`${texto} no es una palabra palindromo`)
    }
}

esPalindromo('hoja')
esPalindromo('oso')
esPalindromo('moco')
esPalindromo('banana')
esPalindromo('radar')




/*Ejercicio 2: Contar vocales en una cadena
Crea una función llamada contarVocales que reciba una cadena de texto como parámetro y devuelva el número de vocales que contiene.

-Requisitos:
Considera las vocales: a, e, i, o, u (tanto mayúsculas como minúsculas).
Ignora los espacios, números o caracteres especiales.*/


function contarVocales (palabra = 'esdrújula'){

    const vocales = "aáeéiíoóuú";
    let cantidadVocales = 0;
    for (const letra of palabra) {
        if (vocales.includes(letra.toLowerCase())) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
};

const palabra = "Iglesia";
console.log(`${palabra} tiene ${contarVocales(palabra)} vocales`);


/*Ejercicio 1: Funciones tradicionales y ámbito de constantes
Descripción:

Crea una constante FACTOR con un valor numérico global.
Implementa una función tradicional que calcule el área de un rectángulo aplicando el factor de escala.
Utiliza una arrow function para imprimir el resultado del área en consola.
Prueba la función usando diferentes valores de base y altura.*/

let factor = 1;

function calcularArea ( hip, cat) {
   
   return (hip * cat)/2
}

const impArea = (hip,cat)=> {
   
    const resultado = calcularArea(hip,cat);
    console.log(`El area del triangulo es ${resultado}`)
}

impArea(5,4)



/*Ejercicio 2: Arrow functions, ámbito de bloque y constantes
Descripción:

Crea una función arrow que calcule el doble de un número.
Declara una constante LIMITE con un valor numérico global.
Dentro de un bloque if, verifica si el doble del número supera el límite. Si lo supera, imprime un mensaje usando otra arrow function.
Llama a la función con distintos valores y verifica su comportamiento.
*/

const limite = 20;

const numDoble = (num) => num *2 ;

const validarDoble = function (resultado){

    if( resultado > limite){
       return console.log (`El número ${resultado} supero el limite`)
    }
       return console.log (`El número ${resultado} esta dentro del limite`)
    
}


const resultado = numDoble(11); 
validarDoble(resultado)

/*Ejercicio: Calcular el descuento aplicado a un producto

1.Declara una constante DESCUENTO con un valor fijo del 10% (0.10).
2.Crea una arrow function llamada calcularDescuento que reciba el precio original y retorne el precio con el descuento aplicado.
3.Crea una función tradicional llamada mostrarPrecioFinal que reciba el precio original y llame a calcularDescuento.
4.Si el precio final (después del descuento) es menor a 50, muestra un mensaje diciendo:
"El precio final es bajo: [precio final]".
Si no, muestra:
"El precio final es: [precio final]".
Prueba tu código con diferentes precios.*/

const descuento = 0.10;

const calcularDescuento = (precio) =>{
    
    const resultado = precio * descuento;
    const precioFinal=  precio - resultado;

    if(precioFinal<50){
        console.log(`El precio final es bajo: ${precioFinal}`)
    }else{
        console.log(`El precio final es:${precioFinal}`)
    }
} 

calcularDescuento(50)

// ES UNA FORMA DE HACERLO PERO SUPUESTAMENTE NO SIGUE BUENAS PRACTICAS
// Principio de responsabilidad única (SRP - Single Responsibility Principle)
//Este principio establece que cada función debe tener una única responsabilidad. En otras palabras, una función debería hacer solo una cosa y hacerla bien.

const descuento2 = 0.10;

const calcularDescuento2 = (precio) => precio - (precio * descuento2)
      


const imprimirMensaje = (precioFinal) =>{

    if(precioFinal<50){
        console.log(`El precio final es bajo: ${precioFinal}`)
    }else{
        console.log(`El precio final es:${precioFinal}`)
    }

}

const precioFinal = calcularDescuento2(40);
imprimirMensaje (precioFinal);


