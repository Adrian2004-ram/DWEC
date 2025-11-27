let nombre = prompt("Escribe tu nombe: ");
let apellidos = prompt("Escribe tus apellidos: ");
let edad = prompt("Escribe tu edad: ");
let salario = prompt("Escrube tu salario: ");


if(salario>=1000 && salario<2000) {
    if(edad > 45) {
        salario *= 1.03;
    } else {
        salario *= 1.1;
    }
} else if (salario < 1000) {
    if (edad < 30) {
        salario = 1100;
    } else if (edad <= 45) {
        salario *= 1.03;
    }else {
        salario *= 1.15;
    }
}

document.write(

    `<p>Persona: ${nombre} ${apellidos}, ` + `edad: ${edad} años, salario: ${salario}</p>`

);