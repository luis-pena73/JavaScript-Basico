class estudiante {   
    constructor (nombre, edad, asignatura=["Javascript", "HTML", "CSS","PHP"]){
        this.nombre =nombre
        this.edad = edad
        this.asignatura = asignatura
    }
    obtenerDatos(){
        console.log(`hola me llamo ${this.nombre}, tengo ${this.edad}, años y estudio ${this.asignatura} `)
    }
}


const estudiante1 = new estudiante("luis fernando", 29,asignatura[0])
console.log(estudiante1)
estudiante1.obtenerDatos()

const estudiante2 = new estudiante("johan esteban", 17,asignatura[3])
console.log(estudiante2)
estudiante2.obtenerDatos()