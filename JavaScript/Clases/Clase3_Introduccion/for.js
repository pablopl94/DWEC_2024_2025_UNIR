//EJERCICO CHATGPT

//Crea un programa en JavaScript que utilice un bucle for para imprimir en la 
// consola los números del 1 al 10, junto con su cuadrado. El formato debe ser:

let num;
let cuadrado;
//let cuadrado = num ** 2;
for ( num = 1 ;num <= 10 ; num++){
    
    cuadrado= num ** 2;
    console.log ( `Numero: ${num} , Cuadrado: ${cuadrado}` )
};


//Crea un programa en JavaScript que utilice un bucle 
//for...of para recorrer un array de nombres. Debe imprimir en la consola un mensaje 
// personalizado para cada nombre del array:

let nombres = ['Juan', 'María', 'Pedro'];

for (let value of nombres){

    value = 'Hola,' + value;
    console.log(value);
}

//Crea un programa en JavaScript que recorra un objeto con un bucle for...in. 
//El objeto debe contener información 
//sobre una persona, como nombre, edad, y ciudad.
//El programa debe imprimir en la consola las claves (propiedades) y sus valores.

const persona = {

    nombre: 'Pablo',
    edad: 30,
    ciudad: 'Alicante'
}
 
for ( let indice in persona){

    console.log(`${indice}: ${(persona[indice])}`);
}


// EJERCICO DIFICIL FOR OF Y FOR IN 
const personas = [
    {
        nombre: 'Ana',
        edad: 28,
        aficiones: ['leer', 'viajar', 'cocinar']
    },
    {
        nombre: 'Luis',
        edad: 35,
        aficiones: ['fútbol', 'ajedrez']
    },
    {
        nombre: 'María',
        edad: 22,
        aficiones: ['pintura', 'escritura', 'senderismo']
    }
];

for (let persona of personas) {
    for (let propiedad in persona) {
        if (propiedad === 'aficiones') {
            console.log('Aficiones:');
            for (let aficion of persona[propiedad]) {
                console.log(`  - ${aficion}`);
            }
        } else {
            console.log(`${propiedad.charAt(0).toUpperCase() + propiedad.slice(1)}: ${persona[propiedad]}`);
        }
    }
    console.log(''); // Línea en blanco para separar cada persona
}