/*
    ===== Código de TypeScript =====
*/

import { Product, calculateTax } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        desc: 'Phone 1',
        price: 100
    },
    {
        desc: 'Phone 2',
        price: 150
    }
];

const [ total, tax ] = calculateTax( shoppingCart );

// console.log( 'Total: ', total );
// console.log( 'Tax: ', tax)