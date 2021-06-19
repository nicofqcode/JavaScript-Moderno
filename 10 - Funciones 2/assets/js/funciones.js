function sumar( a, b ) {
    return a + b;
}

// const sumar2 = (a,b) => {
//     return a + b;
// }
// Es lo mismo que:
const sumar2 = (a,b) => a + b;
//

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random();


console.log( sumar(1,2) );
console.log( sumar2(1,2) );
console.log( getAleatorio() );
console.log( getAleatorio2() );