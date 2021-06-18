/*
    ===== Código de TypeScript =====
*/

class NormalPerson {
    constructor( public name: string, public address: string ) {}
}

class Hero extends NormalPerson {
    // alterEgo: string;
    // age: number;
    // realName: string;

    constructor( 
        public alterEgo: string,
        public age: number,
        public realName: string 
    ) { 
        super( realName, 'NY' );
    }
}

const ironman = new Hero('IronMan', 45, 'Tony');
console.log(ironman);