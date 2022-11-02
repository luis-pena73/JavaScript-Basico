let lista = ["yogurt", "leche", "gelatina", "queso", "mermelada", "uvas", ];
console.log(lista)

lista.push ("Aceite de Girasol")
console.log(lista)

lista.pop(5)
console.log(lista)

let peliculas = [
    {titulo: "The Avengers", director: "Kevin Feige", fecha: 2012 },
    {titulo: "Fast & Furious 8", director: "F. Gary Gray", fecha:  2001 },
    {titulo: "Ice Age", director: "Chris Wedge", fecha: 2002 }
]
let peliculasViejas = peliculas.filter(obj => obj.fecha < 2010)
console.log(peliculasViejas)

let directores = peliculas.map ((valor) => valor.director)
console.log(directores)

let titulo = peliculas.map ((valor) => valor.titulo)
console.log(titulo)

let direcYTitulos = directores.concat(titulo)
console.log(direcYTitulos)
console.log(directores.concat(titulo))
let titYDir =[...titulo, ...directores]
console.log(titYDir)