/*
    ===== Código de TypeScript =====
*/

interface Radio {
    volumen: number;
    second: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const radio: Radio = {
    volumen: 90,
    second: 36,
    song: 'Someone',
    details: {
        author: 'MO',
        year: 2015
    }
}

// Object Destructuring
const { volumen, second, song, details } = radio;
const { author } = details;

// In case of problems with variable names use colon and choose a new name
// const { author: songAuthor } = details

// Sample output
// console.log(`The volumen is: ${volumen}`);
// console.log(`The second is: ${second}`);
// console.log(`The song is: ${song}`);
// console.log(`The author is: ${author}`); 

// Array Destructuring
const people: string[] = ['Mike', 'Ginna', 'Leo'];
const [ p1, p2, p3 ] = people;
// In case you only want to extract one value
// const [ , , p3 ] = people;

console.log(`Person 1: ${p1}`)
console.log(`Person 2: ${p2}`)
console.log(`Person 3: ${p3}`)