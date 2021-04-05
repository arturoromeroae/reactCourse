const personajes = ['goku', 'vegueta', 'trunks']

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1- el primer valor del arr se llamara nombre
// 2- el segundo se llamara setNombre
const state = (valor) => {
    return[valor, () => {console.log('hola mundo')}];
}

const [nombre, setNombre] = state(1);
console.log(nombre);
setNombre();
