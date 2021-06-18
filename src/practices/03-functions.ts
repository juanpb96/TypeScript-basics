/*
    ===== Código de TypeScript =====
*/

//function name (params: type): return type
function sum ( a: number, b: number ): number {
    return a + b;
}

const result = sum(10, 20);

console.log(result);

const arrowSum = ( a: number, b: number ): number => a + b; 

// Params order: first required, second optional or with a default value
function multiply ( num1: number, num2?: number, base: number = 2 ): number {
    return num1 * base;
}


interface Character2 {
    name: string;
    healthPoints: number;
    showHealthPoints: () => void;
    //showHealthPoints: (a:number, b: string, c: boolean) => number;
}

// If function does not return anything, specify void as the return type
function healing ( character: Character2, health: number ): void {
    character.healthPoints += health;
    console.log( character );
}

const newCharacter: Character2 = {
    name: 'Mage',
    healthPoints: 65,
    showHealthPoints() {
        console.log('Current health points: ', this.healthPoints);
    }
}

healing( newCharacter, 20 );

newCharacter.showHealthPoints();