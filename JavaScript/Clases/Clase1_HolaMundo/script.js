function mostrarMensajeExterno() {
  alert("Que pesado eres deja de tocar!");
}


let n = 1;
let s = "1";

function mostrarNumeroPar() {
    if (n % 2 == 0){
        alert("Es par N:" + n);
    } else {
        alert('Es impar N:'+ n);
    }
    n++;
}

//CON == COMPARA VALOR O REPRESENTACION
function mostrarNumerosIguales() {

    if( n == s){
        alert('Son iguales');
    } else {
        alert ('No son iguales');
    }
    
}

//CON === COMPARA VALOR Y TIPO
function mostrarNumerosIguales2() {

    if( n === s){
        alert('Son iguales');
    } else {
        alert ('No son iguales');
    }
    
}

