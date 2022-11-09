function saludar(nombre) {
    console.log("Hola " + nombre)
}

function soyUnaPromesa(callback) {
    setTimeout(function () {
        var invitado = "soy una promesa"
        callback(invitado)
    },5000)     
}

soyUnaPromesa(saludar)



/////

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    

//////

function* generaId() {
    let id = 1;
    while(true) {
        id++
        if (id === 40) {
            return id
        }
        yield id ++ // Esperando hasta que se vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())






