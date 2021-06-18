/*
    ===== Código de TypeScript =====
*/

// It is a class that expands its funtionalities through the @classDecorator keyword
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProp = 'new property';
        hello = 'override';
    };
}

@classDecorator
class MySuperClass {
    public myProp: string = 'ABC123';

    print() {
        console.log('Hello World!');
    }
}

console.log( MySuperClass );