//EJEMPLO ARRAY LITERAL

const colores = ['rojo','azul','verde','amarillo']

console.log(colores[3])

// EJEMPLO ARRAY CONSTRUCTOR

const pintura = new Array ('rojo','azul','verde','amarillo')


console.log(pintura[1])


//TAMBIEN SE PUEDE DECLARAR ARRAYS VACIOS

const dinosaurios = []

//METODOS PROPIOS ARRAY
/*
push() Añade un elemento al final del array.

unshift() Añade un elemento al principio del array.

pop() Quita el último elemento de un array.

shift() Quita el primer elemento de un array.
*/

const pokemons = ['pikachu','charmander','squirtel','bulbasaur'];

pokemons.push('raychu');
console.log(pokemons);

pokemons.unshift('pidgeoto');
console.log(pokemons);

pokemons.pop()
console.log(pokemons);

pokemons.shift();
console.log(pokemons);

//REMPLAZAR ELEMENTO DEL ARRAY 


const simpsons = ['lisa','bart','homer','marge'];

simpsons[0]='magie';
console.log(simpsons);

simpsons.unshift('lisa');
console.log(simpsons);

//Métodos y propiedades de los arrays

//LENGTH

let array = [];
console.log(array.length); // 0
array = [1, 2, 3, 4, 33];
console.log(array.length); // 5
console.log(array[array.length - 1]); // 33



/*
Ejercicio 1: Gestión de una lista de invitados
Crea un array vacío llamado invitados.
Usa push() y unshift() para añadir invitados al final y al principio del array, respectivamente.
Añade al menos 3 invitados usando push() y 2 invitados usando unshift().
Crea un bucle while que haga lo siguiente:
Si el número de invitados es mayor a 4, elimina el último invitado con pop() y guárdalo en un array llamado expulsados.
Si el número de invitados es exactamente 4, rompe el bucle.
Luego elimina al primer invitado del array invitados usando shift() y guarda su nombre en una variable.
Muestra los siguientes datos :

*/

const invitados =[]

invitados.push('Pedro','Pablo','María')

invitados.unshift('Dani','Andres','Laura')

const expulsados=[];

while(invitados.length>4){
        expulsados.push(invitados.pop())
    }
    
let expulsado2 = invitados.shift()

console.log(expulsados)
console.log(expulsado2)
console.log(invitados)


/*
Ejercicio: Lista de espera del hospital
Tienes una lista de espera para atender pacientes en un hospital. Realiza lo siguiente:

Crea un array vacío llamado listaEspera.
Usa push() para añadir tres pacientes al final de la lista.
Usa unshift() para añadir dos pacientes prioritarios al inicio de la lista.
Atiende a los pacientes de la lista en orden usando un bucle while y el método shift().
Si el paciente atendido tiene un nombre específico (por ejemplo, "Juan"), muestra un mensaje especial:
"Paciente Juan ha sido atendido con prioridad."
Guarda los nombres de los pacientes atendidos en un nuevo array llamado pacientesAtendidos.
Muestra:
La lista de pacientes atendidos.
La lista de espera final (debería estar vacía).
*/

const listaEspera = [];

// Añadir pacientes a la lista de espera
listaEspera.push('Pedro', 'Jorge', 'María');
listaEspera.unshift('Borja', 'Benito');

const pacientesAtendidos = []; // Almacena los pacientes atendidos

// Atender pacientes hasta que la lista de espera esté vacía
while (listaEspera.length > 0) {
    
    const paciente = listaEspera.shift(); // Elimina el primer paciente
    
    // Mensaje especial si el paciente es 'Juan'
    if (paciente === 'Juan') {
        console.log(`${paciente} ha sido atendido con prioridad.`);
    } else {
        console.log(`${paciente} ha sido atendido.`);
    }

    // Guardar el paciente atendido en el array
    pacientesAtendidos.push(paciente);
}

// Mostrar resultados
console.log('Pacientes atendidos:', pacientesAtendidos);
console.log('Lista de espera final:', listaEspera);