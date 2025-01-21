const usuario = {
    
    edad: 18,
    tieneEntrada : false,
    pais: 'España',
}


// if (usuario.edad >= 18 && usuario.tieneEntrada) {
//     console.log('El usuario es mayor de edad y tiene entrada');
// } else if (usuario.edad >= 18 && !usuario.tieneEntrada) {
//     console.log('El usuario es mayor de edad pero no tiene entrada');
// } else {
//     console.log('El usuario es menor de edad');
// }

// IFELSE
const accesoUsuario = (usuario)  =>{
   
    if (usuario.edad >= 18 && usuario.tieneEntrada) {
        console.log('El usuario es mayor de edad y tiene entrada');
    } else if (usuario.edad >= 18 && !usuario.tieneEntrada) {
        console.log('El usuario es mayor de edad pero no tiene entrada');
    }else{
        console.log('El usuario es menor de edad');
    }
}

//CONDICIONALES ANINDADAS
const accesoUsuario2 = (usuario)  =>{
   
    if (usuario.edad >= 18 ) {
        if (usuario.tieneEntrada){
            console.log('El usuario es mayor de edad y tiene entrada'); 
        }else{
            console.log('El usuario es mayor de edad pero no tiene entrada');
        }
     }else{
        console.log('El usuario es menor de edad');
     }
}

accesoUsuario2(usuario);
