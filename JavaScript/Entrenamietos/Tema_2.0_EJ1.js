/*Entrenamiento 1
►
Escribe un programa en JavaScript que dada una calificación numérica entre 0 y 10 y la transforma en calificación alfabética, escribiendo el resultado.
o
de 0 a <3 Muy Deficiente.
o
de 3 a <5 Insuficiente.
o
de 5 a <6 Bien.
o
de 6 a <9 Notable
o
de 9 a 10 Sobresaliente.
►
Desarrollo paso a paso:
o
Introducir un valor numérico entre 1 y 10 (se puede generar aleatoriamente)
o
Definir mediante una instrucción de control los posibles casos.
o
Generar la calificación en formato de texto.
o
Mostrar por consola la calificación.
►
Solución: https://github.com/Anuar-UNIR/DWEC_2024_2025/tree/main/Tema%202/Entrenamiento%201 */


const verNota = (nota) =>{

    let calificacion;

    switch (true){
        case (nota >= 0 && nota < 3):
            calificacion = `Muy deficiente`;
            break;

        case (nota >= 3 && nota < 5):
            calificacion = `Insuficiente`;
            break;

        case (nota >= 5 && nota < 6):
            calificacion = `Suficiente`;
            break;

        case (nota >= 6 && nota < 9):
            calificacion = `Bien`;
            break;

        case (nota >= 9 && nota <= 10):
            calificacion = `Excelente`;
            break;

        default:
            calificacion = `Nota no válida`;
            break;
    }
    return calificacion;
}

console.log(verNota(4))


/*Escribe un programa en JavaScript que dada una hora expresada en horas, minutos y segundos que nos calcula y escribe la hora, minutos y segundos que serán,
 transcurrido un segundo.
►
Desarrollo paso a paso:
o
Generar una hora en formato HH:MM:SS (de 0 a 24h).
o
Sumar un segundo a la hora anterior.
o
Calcular los cambios y las diversas posibilidades (horas,minutos).*/

function sumarUnSegundo(hora, minutos, segundos) {
    if (hora >= 0 && hora <= 23 && minutos >= 0 && minutos <= 59 && segundos >= 0 && segundos <= 59) {
        console.log(`La hora actual es: ${String(hora).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`);

        // Sumar 1 segundo
        segundos += 1;

        // Si los segundos alcanzan 60, ajustamos minutos y segundos
        if (segundos === 60) {
            minutos += 1;
            segundos = 0;

            // Si los minutos alcanzan 60, ajustamos horas y minutos
            if (minutos === 60) {
                hora += 1;
                minutos = 0;

                // Si las horas alcanzan 24, reiniciamos a 0
                if (hora === 24) {
                    hora = 0;
                }
            }
        }
        // Mostramos la hora modificada con formato HH:MM:SS
        console.log("La hora modificada es: "+hora+":"+minutos+":"+segundos);
        
    } else {
        console.log("La hora no es correcta");
    }
}


sumarUnSegundo(23,59,59);