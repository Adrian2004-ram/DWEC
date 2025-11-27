

const alumno = {
    nombre: "Carlos",
    edad: 16,
    curso: "Matemáticas",
    aprobado: true
};

console.log(alumno.nombre); // Muestra: Carlos
console.log(alumno['curso']); // Muestra: Matemáticas

alumno.edad = 17;
alumno['aprobado'] = false;
console.log(alumno);

alumno.nota = 8.5;
alumno["email"] = "carlos@email.com";
console.log(alumno);