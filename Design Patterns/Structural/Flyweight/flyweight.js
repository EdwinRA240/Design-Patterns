// Clase Flyweight: Representa un objeto ligero con un estado intrínseco compartido
class Flyweight {
  constructor(color) {
    this.color = color; // Estado intrínseco
  }
}

// Clase FlyweightFactory: Crea y gestiona los objetos Flyweight
class FlyweightFactory {
  constructor() {
    this.flyweights = {}; // Almacena los objetos Flyweight creados
  }

  // Método para obtener un objeto Flyweight con un color dado
  getFlyweight(color) {
    // Si el objeto ya existe, lo devuelve
    if (this.flyweights[color]) {
      return this.flyweights[color];
    }
    // Si no existe, lo crea y lo guarda
    else {
      let flyweight = new Flyweight(color);
      this.flyweights[color] = flyweight;
      return flyweight;
    }
  }

  // Método para contar cuántos objetos Flyweight hay creados
  countFlyweights() {
    return Object.keys(this.flyweights).length;
  }
}

// Clase Circle: Representa un círculo con un estado extrínseco no compartido
class Circle {
  constructor(x, y, radius, color) {
    this.x = x; // Estado extrínseco
    this.y = y; // Estado extrínseco
    this.radius = radius; // Estado extrínseco
    this.flyweight = flyweightFactory.getFlyweight(color); // Estado intrínseco compartido por medio de un objeto Flyweight
  }

  draw() {
    console.log(
      "Dibujando un círculo con centro en (" +
        this.x +
        ", " +
        this.y +
        "), radio " +
        this.radius +
        " y color " +
        this.flyweight.color
    );
  }
}

// Cliente: Usa la fábrica para crear y reutilizar objetos Flyweight

let flyweightFactory = new FlyweightFactory(); // Crea una instancia de la fábrica

let circles = []; // Almacena los círculos creados

// Crea algunos círculos con diferentes colores

circles.push(new Circle(10, 10, 5, "red"));
circles.push(new Circle(20, 20, 10, "green"));
circles.push(new Circle(30, 30, 15, "blue"));

// Crea algunos círculos con colores repetidos

circles.push(new Circle(40, 40, 20, "red"));
circles.push(new Circle(50, 50, 25, "green"));
circles.push(new Circle(60, 60, 30, "blue"));

// Dibuja todos los círculos

for (let circle of circles) {
  circle.draw();
}

// Muestra cuántos objetos Flywight hay creados

console.log(
  `Se han creado ${flyweightFactory.countFlyweights()} objetos Flywight`
);
