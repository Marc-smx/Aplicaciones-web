


let nombre = prompt("¿Cómo te llamas?");


let anioNacimiento = prompt("¿En qué año naciste?");

let anioNumero = Number(anioNacimiento);

let anioActual = new Date().getFullYear();

if (isNaN(anioNumero)) {
    alert("El año introducido no es válido.");
} else {
    let edad = anioActual - anioNumero;

    alert("Hola " + nombre + ", tienes " + edad + " años.");
}
