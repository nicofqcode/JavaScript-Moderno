// Arreglos
//
// Son un objeto muy parecido a una lista de información, que contienen un grupo de elementos.
// Usualmente, esa información dentro del arreglo es del mismo tipo de dato.
// 

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

console.log({ videoJuegos });

console.log( videoJuegos[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1 },
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log( arregloCosas[7][4][1] );