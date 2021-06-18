/*
    ===== Código de TypeScript =====
*/

// Array
let skills = ['Bash', 'Counter', 'Healing'];

// Interface
interface Character {
    name: string;
    health: number;
    skills: string[];
    city?: string;
}

// Object
const character: Character = {
    name: 'Hero',
    health: 100,
    skills: ['Bash', 'Counter', 'Healing']
}

character.city = 'London';

console.table( character );