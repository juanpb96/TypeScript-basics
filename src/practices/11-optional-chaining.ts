/*
    ===== Código de TypeScript =====
*/

interface Passenger {
    name: string;
    children?: string[]; 
}

const passenger1: Passenger = {
    name: 'Rick'
}

const passenger2: Passenger = {
    name: 'Melinda',
    children: ['Morgan', 'Jhon']
}


function printChildren( passanger: Passenger ): void {
    // Optional Chain
    const howManyChildren = passanger.children?.length || 0;
    console.log(howManyChildren);
}

printChildren(passenger1);