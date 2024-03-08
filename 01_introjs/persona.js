//las clases se declaran con la palabra reservada class
//se declara con pascalcase
//se declara en singular
//se declara representativo del recurso y en ingles
class Persona {
  static cantidadDePersonas = 0;
  constructor(nombre, edad, ciudad, vida) {
    this.nombre = nombre;
    this.edad = edad;
    this.ciudad = ciudad;
    this.vida = vida || 100;
    Persona.cantidadDePersonas++;
  }
  comer(cantidad) {
    this.vida < 150
      ? (this.vida = this.vida + cantidad > 150 ? 150 : this.cantidad)
      : console.log(`No podes comer mas ${this.nombre}`);
  }
  entrenar(cantidad) {
    this.vida < 50
      ? this.vida - cantidad
      : console.log(`No podes entrenar mas ${this.nombre}`);
  }
  mudarse(ciudad) {
    this.ciudad = ciudad;
    this.vida = this.vida - 20;
  }
}
const persona1 = new Persona("gabo", 33, "bernal", 120);
const persona2 = new Persona("Sabri", 25, "Quilmes", 0);

console.log(persona1);
console.log(persona2);
console.log(`Total de personas ${Persona.cantidadDePersonas}`);
persona1.comer(100);
console.log(persona1);
persona2.comer(61);
console.log(persona2);
