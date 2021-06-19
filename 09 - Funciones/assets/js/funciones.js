function saludar( nombre ) {
    console.log( arguments );
    console.log( 'Hola ' + nombre );
    return 10;
}

const saludar2 = function( nombre ) {
    console.log( 'Hola ' + nombre );
}

const saludarFlecha = () => {
    console.log( 'Hola flecha' );
}

const saludarFlecha2 = ( nombre ) => {
    console.log( 'Hola ' + nombre );
}


const retornoDeSaludar = saludar( 'Fernando', 40, true, 'Costa Rica' );
console.log( retornoDeSaludar );

saludarFlecha();
saludarFlecha2('Melissa');