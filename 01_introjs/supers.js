const super1 = { nombre: "superman" };
const super2 = { nombre: "ironMan" };
const super3 = { nombre: "batman" };
let super4 = { nombre: "loki" };
const super5 = { nombre: "hulk" };

super1.ciudad = "Estados Unidos";
super1.edad = 32;
console.log(super1);
super4 = { nombre: "thor" };
console.log(super4);

function printName(obj) {
  return `el nombre del super es ${obj.nombre}`;
}
console.log(printName(super2));

function printAll(arrayOfSupers) {
  //por cada elemento del array de supers
  for (let superHeroe of arrayOfSupers) {
    //each es cada objeto del array  de supers
    const template = printName(superHeroe);
    //definir el template a imprimir en consola
    console.log(template);
    //imprime en consola
  }
}
const array1 = [super1, super2, super3];
printAll(array1);
