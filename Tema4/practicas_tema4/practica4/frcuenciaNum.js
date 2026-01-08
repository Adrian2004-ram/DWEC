
let numeros = new Map();

// Inicializar del 1 al 10
//para que al buscar despues un numero, lo encuentre la primera vez
for (let i = 1; i <= 10; i++) {
    numeros.set(i, 0);
}

for (let i = 0; i < 10000; i++) {

    let numAleatorio = parseInt((Math.random()*10)+1);

    let numAsociado = numeros.get(numAleatorio);

    numeros.set(numAleatorio, numAsociado+1);

}

document.write("<h1>Frecuencias</h1>");

document.write("<ul>");

for (let i = 1; i <= 10; i++) {

    document.write(
        `<li><strong>Número ${i}:</strong> ` +
        `${numeros.get(i)}</li>`
    );

}

document.write("</ul>");
