/*Entrenamiento 3
►
Escribe un programa en JavaScript para crear el juego de “Piedra, papel o tijera”, el programa debe de seguir la siguiente estructura.
o
Explicarle al jugador cómo se juega.
o
Generar la jugada aleatoria de cada jugador (usar una función).
o
Decidir quién ha ganado.
►
Desarrollo paso a paso:
o
Explicarle al jugador cómo se juega.
o
Generar la jugada aleatoria del ordenador.
o
Pedir al jugador su jugada mediante una letra (P para piedra, L para papel, T para tijeras):
o
Decidir quién ha ganado (comparación de las jugadas).
o
Mostrar la jugada y el ganador.*/


// Explicación del juego
console.log("¡Bienvenido al juego de Piedra, Papel o Tijera!");
console.log("Reglas del juego:");
console.log(" - P para Piedra");
console.log(" - L para Papel");
console.log(" - T para Tijeras");
console.log("¡Buena suerte!\n");

// Función para generar la jugada aleatoria del ordenador
function jugadaAleatoria() {
    const opciones = ["P", "L", "T"]; // Piedra, Papel, Tijera
    const indice = Math.floor(Math.random() * opciones.length);
    return opciones[indice];
}

// Función para decidir el ganador
function decidirGanador(jugadaJugador, jugadaOrdenador) {
    if (jugadaJugador === jugadaOrdenador) {
        return "Empate";
    }
    if (
        (jugadaJugador === "P" && jugadaOrdenador === "T") || // Piedra gana a Tijeras
        (jugadaJugador === "L" && jugadaOrdenador === "P") || // Papel gana a Piedra
        (jugadaJugador === "T" && jugadaOrdenador === "L")    // Tijeras gana a Papel
    ) {
        return "¡Has ganado!";
    } else {
        return "El ordenador ha ganado.";
    }
}

// Pedir al jugador su jugada
const jugadaJugador = prompt("Introduce tu jugada (P para Piedra, L para Papel, T para Tijeras):").toUpperCase();

// Validar entrada del jugador
if (!["P", "L", "T"].includes(jugadaJugador)) {
    console.log("Entrada no válida. Por favor, elige entre P, L o T.");
} else {
    // Generar la jugada del ordenador
    const jugadaOrdenador = jugadaAleatoria();

    // Mostrar las jugadas
    console.log(`Tu jugada: ${jugadaJugador === "P" ? "Piedra" : jugadaJugador === "L" ? "Papel" : "Tijeras"}`);
    console.log(`Jugada del ordenador: ${jugadaOrdenador === "P" ? "Piedra" : jugadaOrdenador === "L" ? "Papel" : "Tijeras"}`);

    // Decidir el ganador y mostrar el resultado
    const resultado = decidirGanador(jugadaJugador, jugadaOrdenador);
    console.log(resultado);
}
