let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-m-Roll");
console.log(styles);

var longitud = Math.floor(styles.length / 2);

styles[longitud] = "Classic";
console.log(styles);

styles.shift(0);
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);
