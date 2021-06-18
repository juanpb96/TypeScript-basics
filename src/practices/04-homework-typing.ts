/*
    ===== Código de TypeScript =====
*/

// Assign an interface to the object
interface SuperHero {
    name: string;
    age: number;
    // Use other interface to improve the order
    address: Address,           
    showAddress: () => string;
}

// For each nested object is good to define another interface
interface Address {
    street: string;
    country: string;
    city: string;
}

const superHero: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return `${this.name}, ${this.address.city}, ${this.address.country}`
    }
}

const address = superHero.showAddress()
console.log( address );