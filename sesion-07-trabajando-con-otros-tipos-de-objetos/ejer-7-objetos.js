let misDatos = [ {
        Nombre: "luis fernando",
        apellido: "peña",
        edad: 29, 
        altura: 1.68, 
        eresDesarrolador: false, 
    },
]
let miEdad = misDatos.map((valor)=> valor.edad);

console.log(miEdad)
let misAmigos =  [
    {Nombre: "john gomez",  edad: 29,   altura: 1.72, eresDesarrolador: false},
    {Nombre: "wilmer castro",  edad: 29, altura: 1.70, eresDesarrolador: true},
    {Nombre: "nicolas duran",  edad: 18, altura: 1.62, eresDesarrolador: false},
    {Nombre: "cesar gomez",  edad: 26, altura: 1.78, eresDesarrolador: false}

]

let miNucleo = (misDatos.concat(misAmigos))
miNucleo.sort((b, a)=> a.altura - b.altura)
console.log(miNucleo)


miNucleo.sort((a, b)=>{
    if (a.edad > b.edad) {
        return -1;
    } if (a.edad < b.edad) {
        return 1;
    } else {
        return 0;
    }
})
console.log (miNucleo)