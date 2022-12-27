const users = [{
    name: 'sebas',
    lastname: 'bonilla',
    email: 'andy.cbr.ab@academlo.com',
    age: 25,
    social: [
        {name: 'facebook', url: 'facebook/sebas'},
        {name: 'linkedin', url: 'linkedin/sebas'}
    ]
}, {
    name: 'andres',
    lastname: 'robalino',
    email: 'andy.cbr.tr@gmail.com',
    age: 28,
    social: [
        {name: 'facebook', url: 'facebook/andres'},
        {name: 'linkedin', url: 'linkedin/andres'}
    ]
},{
    name: 'andrea',
    lastname: 'robalino',
    email: 'yeya.cbr.tr@gmail.com',
    age: 27,
    social: [
        {name: 'facebook', url: 'facebook/yeya'},
        {name: 'linkedin', url: 'linkedin/yeya'}
    ]
}
]
//-----------------------------------------------------
// let correos = [];
// function extraer(datos){
//     correos.push(datos.email);    
// }
// let correosAcademlo = [];
// function clasificar(datos){
//     if(datos.endsWith('academlo.com') == true){
//         correosAcademlo.push(datos);
//     }
// }
// users.forEach(extraer);
// correos.forEach(clasificar);
// console.log(correosAcademlo);
//-----------------------------------------------------

let correos = [];
function clasificar(valores){
    if(valores.email.endsWith('academlo.com') == false){
        correos.push(valores.email);
    }
}
users.forEach(clasificar);
console.log(correos);