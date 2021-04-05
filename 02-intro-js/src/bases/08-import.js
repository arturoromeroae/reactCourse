// import {heroes} from './data/heroes';
// import { heroes } from "./data/heroes";
import heroes, { owners } from '../data/heroes';

console.log(owners);

// opcion 1
// const getHeroe = (id) => {
//     return heroes.find((superHeroe) => {
//         if (superHeroe.id === id) {
//             return true;
//         }else{
//             return false;
//         }
//     });
// }

// opcion 2
const getHeroe = (id) => heroes.find((superHeroe) => superHeroe.id === id);

console.log(getHeroe(1));

// find?, filter
const getHeroesOwner = (owner) => heroes.filter((superHeroe) => superHeroe.owner === owner);

console.log(getHeroesOwner('Marvel'));
