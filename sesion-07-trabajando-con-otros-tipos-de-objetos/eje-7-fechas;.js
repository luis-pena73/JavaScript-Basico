let hoy = new Date ();
console.log(hoy)
let miFecha = new Date  ("may 22 1993")

let mayor = hoy > miFecha;
console.log(mayor)

let dia = miFecha.getDate();
console.log(dia)

let mes = miFecha.getMonth()+1;
console.log(mes)

let año =  miFecha.getFullYear()
console.log(año)