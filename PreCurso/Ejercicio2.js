// Encontrar el tamaño de la segunda palabra de un texto

const texto = 'vea mi gente';
const inicio = texto.indexOf(' ');
const nuevoTexto = texto.slice(inicio + 1,texto.length);
const final = nuevoTexto.indexOf(' ');

console.log(final);
