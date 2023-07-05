let suma = 0;
let numero;

while (true) {
  numero = prompt("Ingrese un número (pulse 'cancelar' para salir):");

  if (numero === null) {
    break; // El usuario ha pulsado "cancelar", salir del bucle
  }

  numero = parseFloat(numero); // Convertir la entrada a un número de punto flotante

  if (isNaN(numero)) {
    alert("No se ha ingresado un número válido.");
    continue; // Volver a pedir otro número
  }

  suma += numero;
}

alert("La suma total es: " + suma);