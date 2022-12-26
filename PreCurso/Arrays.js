//Arreglos
// Verificar si el correo dentro un array es de academlo
//-----------------------------------------------------------------------------------------------------
const emails = ['andy@academlo.com', 'akhfa@gmail.com', 'aofnap@academlo.com'];

for(let i = 0; i <= emails.length - 1; i++){
    console.log(emails[i].endsWith('academlo.com'));
}
//-----------------------------------------------------------------------------------------------------
// Decir el tamaño de la primera palabra de cada elemento dentro de un array
//-----------------------------------------------------------------------------------------------------
const frases = ['Mi nombre es andres', 'Aca venden carne', 'Asombroso nada mas'];

for(let i = 0; i <= frases.length - 1; i++){
    let final = frases[i].indexOf(' ');
    console.log(final);
}
//-----------------------------------------------------------------------------------------------------
