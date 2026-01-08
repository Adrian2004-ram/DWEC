let n;

do{

    n = prompt("Escibe el número de asteriscos que deseas (debe ser de un número entero positivo)");

} while(isNaN(Number(n) || n <= 0));

for(let i = 1; i <= n; i++){

    for(let j = 1; j <= i; j++){

        document.write("* ");

    }

    document.write("<br>");

}