

let f1 = (n) => {

    if(n <= 1) {
        console.log(n);
    } else {
        console.log(n);
    }

    console.log(f1(parseInt(n/2)))

}

let f2 = (a, ...b) => {

    console.log(a);  // 1
    console.log(b);  // [2, 3, 4]

}

let x = 19; // aqui si le llega
let f3 = () => {

    console.log(x);

}

let f4 = (a, b, c = 10) => {

    console.log(`a = ${a}, b = ${b}, ` + `c = ${c}`);

}

/*
let a = 19;
var a = 19;
let f5 = () => {
    
    console.log(a);

}
*/

let f6 = () => {

    let y = 19;

    console.log(y);

}


let init = function(e) {
    
    // f1(19); 

    // f2(1, 2, 3, 4);

    // let x = 19; // aqui no le llega
    // f3();

    // f4(1);

    // f5();
    
    f6();
    console.log(y);

} 

window.onload = init;