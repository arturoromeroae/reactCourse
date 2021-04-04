// funciones JS
const saludar = function(nombre){
    return `hola, ${nombre}`;
}

const saludar2 = (nombre) => {
    return `hola, ${nombre}`;
}

// si solo se va a emplear return en una funcion
const saludar3 = (nombre) => `hola, ${nombre}`;
const saludar4 = () => `hola, Mundo`;

console.log(saludar('arturo'));
console.log(saludar2('diego'));
console.log(saludar3('marijo'));
console.log(saludar4());

const getUser = () => {
    return {
        uid: 'ABC',
        username: 'mi_casa'
    }
};

const getUser2 = () => (
    {
        uid: 'ABC',
        username: 'mi_casa'
    }
);

console.log(getUser());
console.log(getUser2());

// tarea
// 1- transformar a funcion flecha
// 2- tiene que retornar un objeto implicito
// 3- pruebas
function getUsuarioActivo (nombre){
    return {
        uid: 'ACSAS',
        username : nombre
    }
};

const userArrow = (nombre) => ({
    uid: 'ACSAS',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('arturo romero');
const usuarioActivo2 = userArrow('arturo arrow');
console.log(usuarioActivo2);
console.log(usuarioActivo);
