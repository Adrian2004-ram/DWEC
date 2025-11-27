

// Aplicacion 1

const contacto = {
    nombre: "Lucia",
    telefono: "666555444",
    email: "lucia@gmail.com",
    mostrar: function() {
        console.log("Nombre: ", this.nombre);
        console.log("Teléfono: ", this.telefono);
        console.log("Email: ", this.email);
    }
};

contacto.mostrar();

// Aplicacion 2
const mascota = {
    nombre: "Rocky",
    energia: 5,
    comer: function() {
        this.energia += 2;
        console.log(this.nombre, " ha comido. Energia: ", this.energia);
    },
    jugar: function() {
        if(this.energia > 0) {
            this.energia -= 1;
            console.log(this.nombre, " está jugando. Energía: ", this.energia);
        } else {
            console.log(this.nombre, " está cansado.");
        }
    }
};

mascota.jugar(); // 5
mascota.jugar(); // 4
mascota.jugar(); // 3
mascota.jugar(); // 2
mascota.jugar(); // 1
mascota.jugar(); // esta cansado
mascota.comer(); // Energia recuoerada +2
