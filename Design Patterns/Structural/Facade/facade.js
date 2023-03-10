// Subsistema 1: Clase para crear círculos
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log("Dibujando un círculo con radio " + this.radius);
  }
}

// Subsistema 2: Clase para crear rectángulos
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  draw() {
    console.log("Dibujando un rectángulo con ancho " + this.width + " y alto " + this.height);
  }
}

// Subsistema 3: Clase para crear triángulos
class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  draw() {
    console.log("Dibujando un triángulo con base " + this.base + " y altura " + this.height);
  }
}

// Fachada: Clase que ofrece una interfaz simple para dibujar formas
class ShapeFacade {
  constructor() {
    // Instancias de las clases del subsistema
    this.circle = new Circle(5);
    this.rectangle = new Rectangle(10, 20);
    this.triangle = new Triangle(15, 25);
  }

  // Métodos que invocan a los métodos del subsistema
  drawCircle() {
    this.circle.draw();
  }

  drawRectangle() {
    this.rectangle.draw();
  }

  drawTriangle() {
    this.triangle.draw();
  }
}

// Cliente: Usa la fachada para dibujar formas sin conocer la complejidad interna
let shapeFacade = new ShapeFacade();
shapeFacade.drawCircle(); // Dibujando un círculo con radio 
shapeFacade.drawRectangle(); // Dibujando un rectángulo con ancho 
shapeFacade.drawTriangle(); // Dibujando un triángulo con base 