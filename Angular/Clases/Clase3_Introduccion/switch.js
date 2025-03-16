//PRUEBA EJEMPLO SWITCH

let mes;
let mesNumero = 15 ;

switch (mesNumero){

    case 0: 
    mes = 'Enero';
    break;

    case 1: 
    mes = 'Febrero';
    break;

    case 2: 
    mes = 'Marzo';
    break;
    
    case 3: 
    mes = 'Abril';
    break;

    case 4: 
    mes = 'Mayo';
    break;

    case 5: 
    mes = 'Junio';
    break;

    case 6: 
    mes = 'Julio';
    break;

    case 7: 
    mes = 'Agosto';
    break;

    case 8: 
    mes = 'Septiembre';
    break;

    case 9: 
    mes = 'Octubre';
    break;

    case 10: 
    mes = 'Noviembre';
    break;

    case 11: 
    mes = 'Diciembre';
    break;

    default: 
    mes = 'Mes no valido';
    break;

}

console.log ( mes )


// Calculadora ejercicio  con switch

let num1 = 1;
let num2 = 0;
let operacion;
let operador= '%' ;

switch(operador){

    case '+' :
    operacion = num1 + num2 ;
    break;

    case '-':
    operacion = num1 - num2 ;
    break;

    case '/':
    operacion = (num2 != 0) ? num1 / num2 : 'No se puede dividir entre 0' ;
    break;

    case '*':
    operacion = num1 * num2 ;
    break;

    case '%':
        operacion = (num2 != 0) ? num1 % num2 : 'No se puede calcular el módulo con divisor 0' ;
    break;
    
    default:
        operacion = 'Operacion no valida' ;
        break;
}

console.log ( operacion );