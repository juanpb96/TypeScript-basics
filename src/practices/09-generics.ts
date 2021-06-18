/*
    ===== Código de TypeScript =====
*/

// To establish a generic type use <T> (T is like a standard for generics)
function whatTypeIAm<T> (argument: T) {
    return argument;
}

let iAmString = whatTypeIAm('Hello World!');
let iAmNumber = whatTypeIAm(100);
let iAmArray = whatTypeIAm([1,2,3,4,5,6,7,8,9,10]);
// Pass a explicit type to the function
let iamExplicit = whatTypeIAm<number>(20);