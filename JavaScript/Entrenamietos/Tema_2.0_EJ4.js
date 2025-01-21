
/*Entrenamiento 4
►
Crea un programa que cree un array con 100 números reales aleatorios entre 0.0 y 1.0, utilizando Math.random().
Define una función que dado un array y un numero muestre cuántos valores del array son igual o superiores al número dado.
►
Desarrollo paso a paso:
o
Generar un array de dimensión 100
o
Rellenar con valores aleatorios usando Math.random()
o
Definir una función que tenga un número y un array como parámetros.
o
Implementar la función para que muestre cuantos valores son iguales al número pasado por parámetro.*/

// Generar un array de 100 números aleatorios con dos decimales entre 0.0 y 1.0


function añadirNums (){
    const nums = []
    for(let i = 0 ; i < 100 ; i++){
        nums.push(parseFloat((Math.random() * 1.01).toFixed(2)));
    }
    return nums
};

const arrayNums = añadirNums()
console.log(arrayNums)


let valor = 0.50;

const comparador = arrayNums.reduce(function(contador,a){

    if(a >= valor){
        return contador + 1
    }
        return contador;
},0);

console.log(`El número ${valor} aparece ${comparador} veces en el array`)
