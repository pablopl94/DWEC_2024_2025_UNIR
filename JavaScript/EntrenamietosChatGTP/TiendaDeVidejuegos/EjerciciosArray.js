// 1. Generar y manipular arrays simples
// Ejercicio A: Crear un array con los números del 1 al 10.



function añadirNumeros (){
    const arrayNumeros = [];
    for(let i=1;i<=10;i++){
        arrayNumeros.push(i)
    }
    return arrayNumeros
}

console.log(añadirNumeros())

// Ejercicio B: Crear un array con 10 números aleatorios entre 1 y 100.

function crearArray () {
   const arrayNumeros = []
   while(arrayNumeros.length < 10){
    arrayNumeros.push(Math.floor(Math.random() * 100)+1)
   }
   return arrayNumeros
}

console.log(crearArray());

// Ejercicio C: Encontrar el valor máximo y mínimo en un array.

const arrayNumeros = []

function crearArray (arrayNumeros) {
    
    while(arrayNumeros.length < 10){
     arrayNumeros.push(Math.floor(Math.random() * 100)+1)
    }
    return arrayNumeros
 }

 crearArray(arrayNumeros)
 console.log(arrayNumeros)

 const maxArray = Math.max(...arrayNumeros)
 const minArray = Math.min(...arrayNumeros)


 console.log(`El número mas alto del array es: ${maxArray}`)
 console.log(`El número mas pequeño del array es: ${minArray}`)



// 2. Trabajar con funciones

// Ejercicio A: Escribir una función que sume todos los valores de un array.

const variables = [1,2,3,4,57,7,78,99]


const sumaArray = variables.reduce((acumulador,numero) =>  acumulador + numero);

console.log(sumaArray)

// Ejercicio B: Crear una función que cuente cuántos números de un array son mayores que un valor dado.

const lista = [1,2,3,4,57,7,78,99]

let valor = 50;

const resultado = lista.reduce(function(acumulador,numero){

    if(numero > valor){
        return acumulador + 1;
    }

    return acumulador;
},0);

console.log(`En el array hay ${resultado} números mayores que ${valor}`);

// 3. Cálculos básicos

// Ejercicio A: Calcular la media (promedio) de los valores de un array.

const arrayA = [1,2,3,4,57,7,78,99]

const mediaArray = arrayA.reduce(function(contador,a,index,arrayA){

    let resultado = contador + a;

    if (index === arrayA.length -1){
    return Math.floor(resultado / arrayA.length);}

    return resultado;
    },0);


console.log(`La media del array es ${mediaArray}`);

// Ejercicio B: Calcular la mediana de un array.



// 4. Ejercicios de lógica simples
// Ejercicio A: Contar cuántas veces aparece un número específico en un array.

const numlist = [1,2,4,53,5,4,3,5,5,3,1,3,599,3]

let num = 5;
const contarNumeros = numlist.reduce(function(contador,a){
    
    if(num === a){
        return contador +1 
        }
    return contador
},0);

console.log(`El numero ${num} aparece un total de ${contarNumeros} veces en el array`);

// Ejercicio B: Ordenar un array de menor a mayor.

const numlista = [11,22,43,53,5,4,36,2,54,32,10,70,599,17]

const ordenar = numlista.sort((a,b) => a - b);

console.log(ordenar)
