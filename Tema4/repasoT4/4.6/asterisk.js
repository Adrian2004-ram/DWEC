let array = [];

for(let i=0; i<20; i++) {
    array.push(Math.floor((Math.random()*100)/2));
}

console.log(...array);

let text = "";

for(let ast of array) {
    text += `<p>${"*".repeat(ast)}</p>`;
}

document.writeln(text);