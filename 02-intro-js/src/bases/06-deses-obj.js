// desestructuracion
// asignacion desectructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'ironman'
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const use = ({clave, nombre, edad, rango = 'Capitan'}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 14.5658,
            lng: -12.66441
        }
    }
};

// const {nombreClave, años, latlng:{lat, lng}} = use(persona);
const {nombreClave, años, latlng} = use(persona);
const {lat, lng} = latlng;
console.log(nombreClave, años, lat, lng);
