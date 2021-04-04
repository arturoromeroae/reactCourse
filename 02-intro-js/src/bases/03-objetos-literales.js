const persona = {
    nombre: 'arturo',
    apellido: 'romero',
    edad: 45,
    direccion: {
        ciudad: 'new york',
        zip: 10001,
        lat: 14.56,
        lng: 34.5985,
    }
};

const persona2 = {...persona}; // clonando propiedades de persona
persona2.nombre = 'Peter';

// console.table(persona);
console.log(persona);
console.log(persona2);