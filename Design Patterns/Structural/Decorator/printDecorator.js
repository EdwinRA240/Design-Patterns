// Abstracción
class Forma {
  constructor(color) {
    this.color = color;
  }
  dibujar() {
    console.log(`Dibujando una forma de color ${this.color.getColor()}`);
  }
}

// Implementación
class Color {
  constructor(color) {
    this.color = color;
  }
  getColor() {
    return this.color;
  }
}

// Subclases de abstracción
class Circulo extends Forma {
  constructor(color) {
    super(color);
  }
  dibujar() {
    console.log(`Dibujando un círculo de color ${this.color.getColor()}`);
  }
}

class Cuadrado extends Forma {
  constructor(color) {
    super(color);
  }
  dibujar() {
    console.log(`Dibujando un cuadrado de color ${this.color.getColor()}`);
  }
}

// Subclases de implementación
class Rojo extends Color {
  constructor() {
    super("rojo");
  }
}

class Azul extends Color {
  constructor() {
    super("azul");
  }
}

// Prueba
let formaRoja = new Forma(new Rojo());
formaRoja.dibujar(); // Dibujando una forma de color rojo

let circuloAzul = new Circulo(new Azul());
circuloAzul.dibujar(); // Dibujando un círculo de color azul

let cuadradoRojo = new Cuadrado(new Rojo());
cuadradoRojo.dibujar(); // Dibujando un cuadrado de color rojo