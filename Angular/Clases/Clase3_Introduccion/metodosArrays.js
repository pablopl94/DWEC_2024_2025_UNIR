//Métodos y propiedades de los arrays EJERCICIOS

/*
Ejercicio - Uso del método length
Crea un array llamado frutas que contenga los siguientes elementos:
"manzana", "banana", "uva", "naranja", "pera".

Muestra por consola la cantidad de elementos que tiene el array utilizando el método length.

Agrega un elemento más al final del array llamado "kiwi".

Vuelve a mostrar por consola la cantidad de elementos que tiene el array.*/

const frutas = ["manzana", "banana", "uva", "naranja", "pera"]

console.log(frutas.length)

frutas.push('Kiwi')
console.log(frutas)
console.log(frutas.length)

/*
Ejercicio - Nivel USUARIO (Método length)
------------------------------------------
Tienes una lista de nombres de estudiantes:

const estudiantes = ["Ana", "Carlos", "Beatriz", "David", "Elena"];

Tarea 1: Crea una función llamada verificarLongitud que reciba un array y devuelva un mensaje indicando:
"El array está vacío" si no tiene elementos.
"El array tiene pocos elementos" si tiene menos de 5 elementos.
"El array está completo" si tiene exactamente 5 elementos.
"El array está lleno de más elementos" si tiene más de 5 elementos

Tarea 2:
Muestra por consola el resultado de llamar a verificarLongitud con el array estudiantes.
Luego, agrega dos nombres más al array y vuelve a llamar a la función para mostrar el resultado actualizado. */

//Tarea 1
const estudiantes = ["Ana", "Carlos", "Beatriz", "David", "Elena"];

const verificarLongitud = (estudiantes) => { 
    if (estudiantes.length === 0) return 'El array está vacío';
    if (estudiantes.length < 5) return 'El array tiene pocos elementos';
    if (estudiantes.length === 5) return 'El array está completo';
    if (estudiantes.length > 5) return 'El array está lleno de más elementos';
}

//Tarea 2

console.log(verificarLongitud(estudiantes))

estudiantes.push ('Pablito','Néstor')

console.log (`Despues de añadir dos más : ${verificarLongitud(estudiantes)}`)


/*
Ejercicio - Nivel USUARIO (Método forEach)
Dado un array de números:ç
const numeros = [2, 4, 6, 8, 10, 12];

Tarea 1: Crea una función llamada mostrarCuadrados que recorra el array usando forEach y muestre en la consola el cuadrado de cada número del array.

Tarea 2: Crea una nueva función llamada sumaTotal que utilice forEach para calcular la suma de todos los números del array y devuelva el resultado.

Tarea 3: Llama a ambas funciones y muestra los resultados correspondientes en la consola.*/

//Tarea 1
const numeros = [2, 4, 6, 8, 10, 12];

function mostrarCuadrados (numeros){
    numeros.forEach(numero => 
        {console.log(`El cuadrado de ${numero} es: ${Math.pow(numero, 2)}`)}
    )}

//Tarea 2

let suma = 0;
numeros.forEach(numero => suma += numero);

//Tarea 3
mostrarCuadrados(numeros)
console.log(`La suma de todos los números del array es: ${suma}`);

//ANOTACION IMPORTANTE: forEach no devuelve un valor en si, si llamamos a una funcion con forEach devolvera undefined.
//simplemente usamos forEach si queremos sacar la accion en concreto.


//MAP EJERCICIOS

/*Ejercicio - Nivel USUARIO (Método map)
Dado un array de productos con su precio original:

Tarea 1: Crea una función llamada aplicarDescuento que reciba un array de productos y un porcentaje de descuento (por ejemplo, 20 para un 20% de descuento).
Usa el método map para devolver un nuevo array de productos con los precios actualizados aplicando el descuento.
No modifiques el array original.

Tarea 2: Muestra el nuevo array de productos con los precios actualizados en la consola.

Tarea 3: Muestra en la consola el array original para confirmar que no fue modificado.*/

const productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 50 },
    { nombre: "Zapatos", precio: 100 },
    { nombre: "Sombrero", precio: 30 }
  ];

  const descuento= 0.20;

  const aplicarDescuento = productos.map(function(productos) {

         return {
        nombre: productos.nombre,
        precio: productos.precio - (productos.precio * descuento) 
        };
    })

    console.log(aplicarDescuento)

    console.log(productos)

/* EJERCICIO 2:
--------------------
Dado un array de estudiantes con sus notas:
Tarea 1: Usa el método map para crear un nuevo array en el que cada estudiante tenga un nuevo campo llamado aprobado.

Este campo debe ser true si la nota es mayor o igual a 6, y false en caso contrario.
No modifiques el array original.
Tarea 2: Muestra en la consola el nuevo array con el campo aprobado.

Tarea 3: Confirma que el array original de estudiantes no fue modificado.
*/

const newEstudiantes = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Carlos", nota: 5 },
    { nombre: "Beatriz", nota: 6 },
    { nombre: "David", nota: 9 },
    { nombre: "Elena", nota: 4 }
  ];



  const modificarObjeto = newEstudiantes.map(function(newEstudiantes){

    let nota = newEstudiantes.nota;

    return {

        nombre: newEstudiantes.nombre,

        nota: nota,

        aprobado: (nota>=6) ? ('aprobado') : ('suspendido') 
  }
})

console.log(modificarObjeto)

console.log(newEstudiantes)


//METODO FIND

/*
Ejercicio - Nivel USUARIO (Método find)
------------------------------------------

Tarea 1: Usa el método find para encontrar la primera persona que sea mayor de edad (18 años o más).

Tarea 2: Si se encuentra a esa persona, muestra un mensaje en consola como:
"La primera persona mayor de edad es: Ana, con 25 años".

Tarea 3: En caso de que no se encuentre a nadie mayor de edad (por ejemplo, si el array está vacío o todos son menores), muestra el mensaje:
"No se encontró ninguna persona mayor de edad."*/

const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Carlos", edad: 17 },
    { nombre: "Beatriz", edad: 30 },
    { nombre: "David", edad: 20 },
    { nombre: "Elena", edad: 15 }
  ];

const mayorDeEdad = personas.find(function(persona) {
    return persona.edad >= 18; // Condición para encontrar la primera persona mayor de edad
});

function mandarMensaje (mayorDeEdad) {

    if (mayorDeEdad) {
        return(`La primera persona mayor de edad es: ${mayorDeEdad.nombre}, con ${mayorDeEdad.edad} años.`);
    } else {
        return (`No se encontró ninguna persona mayor de edad.`);
    }
}

console.log(mandarMensaje(mayorDeEdad))


/*
¡Perfecto! Aquí va un ejercicio donde puedes combinar sort, reduce y filter para practicar cómo funcionan juntos. 🚀

Ejercicio - Nivel INTERMEDIO (Combinar sort, reduce y filter)
-----------------------------------------------------------------------------
Tienes una lista de productos con su precio y su categoría:

Filtrar los productos de la categoría "Ropa".

-Usa filter para obtener solo los productos cuya categoría sea "Ropa".
Ordenar los productos filtrados por precio en orden ascendente.

-Usa sort para organizar los productos por precio, de menor a mayor.
Calcular el precio total de los productos filtrados.

-Usa reduce para sumar los precios de los productos de la categoría "Ropa" y obtener el total.
Muestra en consola:

El array de productos filtrados y ordenados.
El precio total calculado.
*/

const producto = [
    { nombre: "Camisa", precio: 20, categoria: "Ropa" },
    { nombre: "Pantalón", precio: 50, categoria: "Ropa" },
    { nombre: "Zapatos", precio: 80, categoria: "Calzado" },
    { nombre: "Sombrero", precio: 15, categoria: "Accesorios" },
    { nombre: "Bufanda", precio: 10, categoria: "Accesorios" },
    { nombre: "Abrigo", precio: 100, categoria: "Ropa" }
  ];


const catgRopa = producto.filter(function(producto){

    return producto.categoria === "Ropa";
});


const ordenarFilt = catgRopa.sort(function(a,b){

    return a.precio - b.precio;
});


const sumaRopa = catgRopa.reduce(function(acumulador,producto){

    
    return  acumulador + producto.precio
}, 0);

console.log(ordenarFilt);
console.log(sumaRopa);

//

const numeros3 = [33, 45, 1, 100, 2, 4];
const ordenados = numeros3.sort()
console.log(ordenados); // 1, 2, 4, 33, 45, 100


