

Array.prototype.media = function() {
    
    let suma = this.reduce((anterior, actual) => (anterior + actual));

    let tamaño = this.length;

    return suma / tamaño;

}

let al = [1, 2, 3, 4, 5, 6];

console.log(al.media());

let al2 = [10, 13, 16, 21, 28, 19, 45, 32, 20];

console.log(al2.media());