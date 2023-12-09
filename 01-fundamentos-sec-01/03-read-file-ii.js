const fs = require('fs');
const content = fs.readFileSync('README.md', 'utf8');
const words = content.split(' ');
// const wordsReact = words.filter(
//     word => word.toLocaleLowerCase().includes('react')
// );
wordsReact = content.match(/react/ig ?? []);
console.log('Palabras:', words.length);
console.log('Palabras React:', wordsReact.length);