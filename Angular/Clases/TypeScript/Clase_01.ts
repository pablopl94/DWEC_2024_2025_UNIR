
//Declarar variables implicitas
let a = "Hola";

//Declarar variables explicitas
let b: String =  "Hola";

//Declarar variable con cualquier tipo de manera implicita
let c;
c= true;

//Declarar variable con cualquier tipo de manera explicita 
let d: any= "Estopa " + 2025 ;

//Declarar variable con varios tipos    
let cadena1: String|number = "El numero de Cristiano Ronaldo es el " + 7;


//Declarar Arrays formas 
const animales:Array<String> = ['Perro', 'Gato', 'Lobo', 'Tigre', 'Jirafa'];
console.log(animales);
//-----------------------------------------------------------------------------------
const numeros:number[]=[];
numeros.push(1,2,3,4,5,6,7);
console.log(numeros);
//-----------------------------------------------------------------------------------
const ciudadesYNumeros:(number|String)[] =[1,'Alicante',2,'Murcia', 3,'Madrid'];
console.log(ciudadesYNumeros);
//-----------------------------------------------------------------------------------
const letrasYNumeros: Array<number|String> =[1,'a',2,'b',3,'c'];
console.log(letrasYNumeros);
//-----------------------------------------------------------------------------------

// //ENUM
// Un enum sirve para definir un grupo de valores fijos que representan algo específico, 
// como días de la semana, roles de usuario o estados de algo. 
// En lugar de usar cadenas o números "sueltos", usas nombres claros que evitan errores y hacen el código más fácil de entender.

  
//EJEMPLO DE ENUM
enum Dias {
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
  }
  

  const diaActual: Dias = Dias.Lunes;
  console.log(diaActual); // Output: 0 (índice del enum)

//EJEMPLO DE ENUM
  enum EstadoPedido {
    Pendiente,
    EnProceso,
    Entregado
  }
  
  const estado: EstadoPedido = EstadoPedido.Entregado;
  if (estado === EstadoPedido.Entregado) {
    console.log("El pedido ya fue entregado");
  };


// //Tipos predefinidos (como roles de usuario):
// Cuando tienes valores constantes que representan roles:


enum Roles {
  Admin = "Administrador",
  Usuario = "Usuario",
  Invitado = "Invitado"
}

function saludar(rol: Roles): void {
  if (rol === Roles.Admin) {
    console.log("Bienvenido, Administrador");
  }
}

saludar(Roles.Admin); // ✅ Bienvenido, Administrador
// saludar("Admin");   ❌ Error en TypeScript: solo acepta valores del enum

//TUPLAS 

// Las tuplas en TypeScript son un tipo especial de array donde se define exactamente 
// cuántos elementos puede contener y qué tipos de datos tendrá cada uno de esos
//  elementos en un orden específico.

// Es como una versión más estricta de los arrays en TypeScript

let usuarios:[String,number,String,boolean]=[
    'Pablo',
    30,
    'Alicante',
    true
];

// Una tupla tiene una longitud fija. No puedes agregar más elementos sin generar un error:
// let punto: [number, number] = [5, 10];
// punto.push(15); // ❌ Esto genera un error con configuraciones estrictas.


// DESTRUCTURACIÓN DE TUPLAS
// Puedes usar destructuración para extraer los valores de una tupla:

let usuario: [string, number] = ["Ana", 25];
let [nombre, edad] = usuario;

console.log(nombre); // "Ana"
console.log(edad);   // 25


//FUNCIONES

//CUANDO UNA FUNCION NO DEVUELVE NADA DEVUELVE VOID COMO EN JAVA
function saludito (mensaje:String): void{
    console.log(mensaje.toUpperCase)// podemos aplicar metodos de la clase String 
}

//CUANDO DEVUELVE ALGO LA FUNCION ESTA BIEN PONER QUE DEVUELVE


function suma(num1: number, num2: number):number{
    return num1 + num2
}

console.log(suma(1003,10303));

//EJEMPLO FUNCION COMPARAR DOS NUMERO EN JS

function compararNumeros(a: number, b: number):void{
    if (a>b) {
      console.log(`El número ${a} es mayor que ${b}`);
    } else {
      console.log(`El número ${a} es menor o igual que ${b}`);
    }
  }



//CASTING 


let cadena2: String = "22";

let cadena2Numero : number = (<String>cadena2).length;

console.log(`La variable cadena2Numero tiene el valor ${cadena2Numero} y es de tipo: ${typeof cadena2Numero}`);


// otro ejemplo de casting

let cadena3:String = "Es hora del almuerzo"

let cadenaNumero:number = (cadena3 as String).length;

console.log ( `La cadena3 tiene ${cadenaNumero} palabras `)


// Ejemplo  mio de prueba de castings 

let cadena4 = 'ESTO ES UNA BROMA'
let cadena4Palabras = cadena4.length

console.log(typeof cadena4Palabras);

//NOTA: Si no defines el tipo explicitamente lo hace implicitamente y funciona igual...en este caso



//EJERCICIO DE PRUEBA DE TS

// Enunciado del Ejercicio (en JavaScript):
// Escribe un programa que cumpla con los siguientes pasos:
// Crea un array llamado numeros que contenga los números: 1, 2, 3, 4, 5.
// Añade el número 6 al final del array.
// Elimina el primer elemento del array.
// Encuentra el número 4 dentro del array y reemplázalo por el número 10.
// Crea un nuevo array llamado dobles que contenga cada número del array numeros multiplicado por 2.
// Imprime los dos arrays (numeros y dobles) en la consola.


// Paso 1: Crear el array
const list3: number[] = [1, 2, 3, 4, 5];

// Paso 2: Añadir el número 6 al final
list3.push(6);

// Paso 3: Eliminar el primer elemento
list3.shift();

// Paso 4: Reemplazar el número 4 por el 10
const index2:number = list3.indexOf(4); // Encontrar la posición del número 4
if (index2 !== -1) {
  list3[index2] = 10; // Reemplazarlo por 10
}

// Paso 5: Crear un nuevo array con números multiplicados por 2
let listDobles : number[] = list3.map(num => num * 2);

// Paso 6: Imprimir los arrays
console.log("Array original:", list3);
console.log("Array con dobles:", listDobles);


//