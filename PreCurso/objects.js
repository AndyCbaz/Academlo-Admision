// const object1 = {
//     Color: 'Azul',
//     Puertas: 5,
//     Ventanas: 8,
//     Precio: 25000
// };

// console.log(object1);
// delete object1.Ventanas;
// console.log(object1);
// object1.pasajeros = 8;
// console.log(object1);
// --------------------------------------------------------------------------------------------
// 1 Crear un arreglo de 5 usuarios que tengan las propiedades name y email
const user = {
    name: 'Erik',
    email: 'nfjaoo@gmail.com'
}

const user2 = {
    name: 'Daniel',
    email: 'daniel@academlo.com'
}
const user3 = {
    name: 'Andrea',
    email: 'andrea@academlo.com'
}
const user4 = {
    name: 'Monica',
    email: 'monica@academlo.com'
}
const user5 = {
    name: 'Carmen',
    email: 'carmen@academlo.com'
}

const usuarios = [user,user2,user3,user4,user5];
console.log(usuarios);
// 2 Validar si los usuarios tienen correo de academlo
for(let i = 0; i <= usuarios.length - 1; i++){
    console.log(usuarios[i].email.endsWith('academlo.com'));
}