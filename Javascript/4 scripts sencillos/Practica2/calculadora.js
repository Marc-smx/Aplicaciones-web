

let num1 = Number(prompt("Primer número:"));
let num2 = Number(prompt("Segundo número:"));
let operacion = prompt("Operación (+, -, *, /):");

let resultado;

if (operacion === "+") {
    resultado = num1 + num2;
    alert("Resultado: " + resultado);
} else if (operacion === "-") {
    resultado = num1 - num2;
    alert("Resultado: " + resultado);
} else if (operacion === "*") {
    resultado = num1 * num2;
    alert("Resultado: " + resultado);
} else if (operacion === "/") {
    if (num2 === 0) {
        alert("Error: no se puede dividir entre 0.");
    } else {
        resultado = num1 / num2;
        alert("Resultado: " + resultado);
    }
} else {
    alert("Operación no válida.");
}
