

let esPrimo = (num) => {

    let result = true;

    if(num<=1) {
        
        result = false

    } else {

        for(let i=2; i*i < num; i++) {

            if(num % i == 0) {
                result = false;
            }
        }
    }

    return result;

}