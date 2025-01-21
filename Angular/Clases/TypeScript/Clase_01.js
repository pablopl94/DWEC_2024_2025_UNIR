//Declarar variables implicitas
var a = "Hola";
//Declarar variables explicitas
var b = "Hola";
//Declarar variable con cualquier tipo de manera implicita
var c;
c = true;
//Declarar variable con cualquier tipo de manera explicita 
var d = "Estopa " + 2025;
//Declarar variable con varios tipos    
var cadena1 = "El numero de Cristiano Ronaldo es el " + 7;
//Declarar Arrays formas 
var animales = ['Perro', 'Gato', 'Lobo', 'Tigre', 'Jirafa'];
console.log(animales);
//-----------------------------------------------------------------------------------
var numeros = [];
numeros.push(1, 2, 3, 4, 5, 6, 7);
console.log(numeros);
//-----------------------------------------------------------------------------------
var ciudadesYNumeros = [1, 'Alicante', 2, 'Murcia', 3, 'Madrid'];
console.log(ciudadesYNumeros);
//-----------------------------------------------------------------------------------
var letrasYNumeros = [1, 'a', 2, 'b', 3, 'c'];
console.log(letrasYNumeros);
//-----------------------------------------------------------------------------------
// //ENUM
// Un enum sirve para definir un grupo de valores fijos que representan algo específico, 
// como días de la semana, roles de usuario o estados de algo. 
// En lugar de usar cadenas o números "sueltos", usas nombres claros que evitan errores y hacen el código más fácil de entender.
//EJEMPLO DE ENUM
var Dias;
(function (Dias) {
    Dias[Dias["Lunes"] = 0] = "Lunes";
    Dias[Dias["Martes"] = 1] = "Martes";
    Dias[Dias["Miercoles"] = 2] = "Miercoles";
    Dias[Dias["Jueves"] = 3] = "Jueves";
    Dias[Dias["Viernes"] = 4] = "Viernes";
    Dias[Dias["Sabado"] = 5] = "Sabado";
    Dias[Dias["Domingo"] = 6] = "Domingo";
})(Dias || (Dias = {}));
var diaActual = Dias.Lunes;
console.log(diaActual); // Output: 0 (índice del enum)
//EJEMPLO DE ENUM
var EstadoPedido;
(function (EstadoPedido) {
    EstadoPedido[EstadoPedido["Pendiente"] = 0] = "Pendiente";
    EstadoPedido[EstadoPedido["EnProceso"] = 1] = "EnProceso";
    EstadoPedido[EstadoPedido["Entregado"] = 2] = "Entregado";
})(EstadoPedido || (EstadoPedido = {}));
var estado = EstadoPedido.Entregado;
if (estado === EstadoPedido.Entregado) {
    console.log("El pedido ya fue entregado");
}
;
// //Tipos predefinidos (como roles de usuario):
// Cuando tienes valores constantes que representan roles:
var Roles;
(function (Roles) {
    Roles["Admin"] = "Administrador";
    Roles["Usuario"] = "Usuario";
    Roles["Invitado"] = "Invitado";
})(Roles || (Roles = {}));
function saludar(rol) {
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
var usuarios = [
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
var usuario = ["Ana", 25];
var nombre = usuario[0], edad = usuario[1];
console.log(nombre); // "Ana"
console.log(edad); // 25
//FUNCIONES
//CUANDO UNA FUNCION NO DEVUELVE NADA DEVUELVE VOID COMO EN JAVA
function saludito(mensaje) {
    console.log(mensaje.toUpperCase); // podemos aplicar metodos de la clase String 
}
//CUANDO DEVUELVE ALGO LA FUNCION ESTA BIEN PONER QUE DEVUELVE
function suma(num1, num2) {
    return num1 + num2;
}
console.log(suma(1003, 10303));
//EJEMPLO FUNCION COMPARAR DOS NUMERO EN JS
function compararNumeros(a, b) {
    if (a > b) {
        console.log("El n\u00FAmero ".concat(a, " es mayor que ").concat(b));
    }
    else {
        console.log("El n\u00FAmero ".concat(a, " es menor o igual que ").concat(b));
    }
}
//CASTING 
var cadena2 = "22";
var cadena2Numero = cadena2.length;
console.log("La variable cadena2Numero tiene el valor ".concat(cadena2Numero, " y es de tipo: ").concat(typeof cadena2Numero));
// otro ejemplo de casting
var cadena3 = "Es hora del almuerzo";
var cadenaNumero = cadena3.length;
console.log("La cadena3 tiene ".concat(cadenaNumero, " palabras "));
// Ejemplo  mio de prueba de castings
var cadena4 = 'ESTO ES UNA BROMA';
var cadena4Palabras = cadena4.length;
console.log(typeof cadena4Palabras);
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
var list3 = [1, 2, 3, 4, 5];
// Paso 2: Añadir el número 6 al final
list3.push(6);
// Paso 3: Eliminar el primer elemento
list3.shift();
// Paso 4: Reemplazar el número 4 por el 10
var index2 = list3.indexOf(4); // Encontrar la posición del número 4
if (index2 !== -1) {
    list3[index2] = 10; // Reemplazarlo por 10
}
// Paso 5: Crear un nuevo array con números multiplicados por 2
var listDobles = list3.map(function (num) { return num * 2; });
// Paso 6: Imprimir los arrays
console.log("Array original:", list3);
console.log("Array con dobles:", listDobles);
//
