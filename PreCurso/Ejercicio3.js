// Encontrar el tamaño de la primera palabra de la descripcion de cada usuario

const user = {
    name: 'Erik',
    description: 'Me gusta la programación'
}

const user2 = {
    name: 'Daniel',
    description: 'Estoy aprendiendo a programar'
}

const firstDesc = user.description;
const secondDesc = user2.description;
console.log(firstDesc.indexOf(' '))
console.log(secondDesc.indexOf(' '))