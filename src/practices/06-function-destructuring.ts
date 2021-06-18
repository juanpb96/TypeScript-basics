/*
    ===== Código de TypeScript =====
*/

export interface Product {
    desc: string;
    price: number;
}

const phone: Product = {
    desc: 'Nokia A1',
    price: 150
}

const tablet: Product = {
    desc: 'iPad',
    price: 450
}

export function calculateTax( products: Product[] ): [number, number] {
    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    })

    return [total, total * 0.19];
}

const items = [ phone, tablet ]

const [ total, tax ] = calculateTax( items );

// console.log('Total is: ', total);
// console.log('Tax is: ', tax);