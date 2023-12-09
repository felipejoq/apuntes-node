// Importación de archivos con common js
const { emailTemplate } = require('./helpers/template.js');
console.log(emailTemplate);

// Destructuración de objetos
const { SHELL } = process.env;
console.log({ SHELL });

// Destructuración de arreglos
const heros = ['Goku', 'Súper Man', 'Gohan'];
const [ , , gohan] = heros;
console.log(gohan);