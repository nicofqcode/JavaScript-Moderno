let a = 5;

if ( a >= 10 ) { // undefined, null, una asignación
    console.log('A es mayor que 10');
} else {
    console.log('A es menor a 10');
}

// console.log('Fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes....

console.log({ dia });

if ( 5 === '5' ) {
    console.log('Domingo');
} else if( dia === 1 ) {
    console.log('Lunes');

    // if ( dia === 1 ) {
    //     console.log('Lunes');
    // } else {
    //     console.log('No es Lunes ni Domingo');
    // }
} else if ( dia === 2 ){
    console.log('Martes');
} else {
    console.log('No es Lunes, Martes o Domingo...');
}


// Sin usar If Else, o Switch, únicamente objetos
dia = 3; // 0:domingo, 1:lunes....

const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
}

const diasLetras2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

// día de la semana
console.log( diasLetras2[dia] );