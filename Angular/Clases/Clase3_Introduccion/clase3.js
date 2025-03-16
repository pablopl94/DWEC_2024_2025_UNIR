
// Comentario de una línea

/*Comentarios de varias líneas
 Es igual que en Javas
 */


 let b = true;
 console.log(typeof b); // Devuelve boolean

 let a ='Hola';
 console.log(typeof a ); // Devyelve String

 let c ;
 console.log(typeof c ); // Devyelve Undefinded


 //Cambiamos valor y tipo a 'a'. CON LET
 a = 'Hola MDC'
 console.log(typeof a ); 

 //Variables globales

 var pablo = 'Hola';

 //Definimos variable constante

 const d = 1 ;

/* No se puede asignar otro valor a un const 
 d = 45;
*/

// Nomenclatura correcta 

let aulaMatematicas = '5 alumnos ';

// Comparaciones

/*
let x = 5 ;
let z = 'Estupendo día'
let y = 'No es un estupendo día'

console.log( ' El tipo de dato de x es : ' + typeof x );

console.log( ' El tipo de dato de z es : ' + typeof z );

*/

let x = 5 ;
let z = '10';
let y = 10 ;


let comparativaXZ = x == z;
let comparativaYZ = y == z;
let comparativafuerteYZ = y === z;


console.log( ' El tipo de dato de comparativaXZ es : ' + typeof comparativaXZ );


console.log( '¿ La variable x es igual a z? => ' +  comparativaXZ );

console.log( '¿ La variable y es igual a z? => ' +  comparativaYZ );

console.log( '¿ La variable y es igual a z? => ' +  comparativafuerteYZ );


console.log('El tipo de dato si juntamos z + y es: ' + typeof (z + y )); // tipo numero + tipo Stirng devuelve STRING! 



//Instrucciones de control

notaAlumno = 5;

if (notaAlumno < 5 ){
    console.log( ' Suspenso')
} else {
    console.log ( 'Aprobado')
};


// Operador 

notaAlumno = 4.5;
let aprobado = (notaAlumno < 5 ) ?  'Aprobado' : ' Suspenso' ;

console.log  (`El alumno ha aprobado: ${aprobado} `);

// EJEMPLO ACCESO FIESTA COMPARADORES 

let nombre = 'Pablo';
let edad = 17;
let permiso = false;
let entrada = false;

acceso = ((edad > 18) || permiso ) && entrada;

console.log(`El ${nombre} puede entrar a la fiesta: ${acceso ? 'Si' : 'No'}`);

// EJEMPLO ACCESO FIESTA COMPARADORES  MAS DIFICIL

const personas = [
    { nombre: 'Piruko', edad: 15, permiso: false, entrada: false },
    { nombre: 'Manuel', edad: 16, permiso: true, entrada: true },
    { nombre: 'Ana', edad: 20, permiso: false, entrada: true },
    { nombre: 'Luis', edad: 17, permiso: false, entrada: false }
];

function verificarAcceso(persona) {
    return (persona.edad >= 18 || persona.permiso) && persona.entrada;
}

const manuel = personas.find(persona => persona.nombre === 'Manuel');

 console.log(`El ${manuel.nombre} puede entrar a la fiesta: ${verificarAcceso(manuel) ? 'Si' : 'No'}`);

 //SWITCH

// Convierte una variable donde está el día de la semana en número en la palabra en castellano para ese día

let dia;
let diaNumero = 1;

switch (diaNumero) {
    case 0:
        dia = "Lunes";
        break;
    case 1:
        dia = "Martes";
        break;
    case 2:
        dia = "Miércoles";
        break;
    case 3:
        dia = "Jueves";
        break;
    default:
        dia = "Error";
}

console.log(dia);

