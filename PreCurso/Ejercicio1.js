//Encontrar el tamaño de la ultima palabra de un texto 

const word = 'Aqui se encuentra mi hermanita';
const inicio = word.lastIndexOf(' ');
const final = word.length - 1;
const result = final - inicio;
console.log(result);