import {getHeroe} from "./bases/08-import";
// import heroes from "./data/heroes";

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // tarea
//         // importar el getheroe
//         const p1 = getHeroe(1)
//         resolve(p1);
//         // reject('No se puedo encontrar el heroe');
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('heroe', heroe);
// })
// .catch(err => console.warn(err));

const getHeroeId = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // tarea
            // importar el getheroe
            const p1 = getHeroe(id)
            if (p1 === undefined) {
                reject('No se puedo encontrar el heroe');
            }else{
                resolve(p1);
            }
            // resolve(p1);
            // reject('No se puedo encontrar el heroe');
        }, 2000);
    });

}

getHeroeId(1)
    // .then(heroe => console.log('heroe', heroe))
    // opcion 2
    .then(console.log)
    // .catch(err => console.warn(err));
    //opcion 2
    .catch(console.warn);

