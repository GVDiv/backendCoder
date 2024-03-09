const n1 = 100
const n2 = 30
const n3 = 50

const c1 = "hola"
const c2 = "chau"
const c3 = "mundo"

const obj = {
    nombre: "jp",
    edad: 30,
    ciudad: "quilmes",
    color: "rojo",
    mascota: "gato",
}

const exponencial1 = n2 ** n1;
console.log(exponencial1)

const exponencial2 = n2 ** n3;
console.log(exponencial2)

const arrayDeCadenas = ["hola","chau","mundo"]
console.log(arrayDeCadenas)

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))

const {nombre, edad, ...rest} = obj
console.log(nombre)
console.log(edad)
console.log(rest)

const cadenasYnumeros = {c1, c2, c3, n1, n2, n3}
console.log(cadenasYnumeros)