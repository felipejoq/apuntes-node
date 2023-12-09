console.log('Inicio de programa'); // Primer ejecución.

// último
setTimeout(() => {
    console.log('Primer Timeout');
}, 3000);

// Segundo?
setTimeout(() => {
    console.log('Segundo Timeout');
}, 1);

// Segundo o tercero?
setTimeout(() => {
    console.log('Tercer Timeout');
}, 0);

// Final
console.log('Fin de programa');

