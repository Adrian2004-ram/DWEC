function sumInput() {

    var almacen = [];
    var suma = 0;
    var pideMas = true;
    
    do{

        var valor = prompt("Dame un valor: ");

        if(isNaN(valor) || valor === "" || valor.toLowerCase() === "escape" ) {
            pideMas = false;
            break;
        } else {

            almacen.push(+valor);

        }

    }while(pideMas);

    for(let i of almacen) {

        suma += i;
        console.log("valor de i: " + i)
        console.log("valor de suma: " + suma)

    }

    alert(suma);

}

sumInput();