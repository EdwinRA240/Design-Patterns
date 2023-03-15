// Creamos las clases de formas
class Triangle {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  
  accept(visitor) {
    visitor.visitTriangle(this);
  }
}

class Square {
  constructor(side) {
    this.side = side;
  }
  
  accept(visitor) {
    visitor.visitSquare(this);
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  accept(visitor) {
    visitor.visitCircle(this);
  }
}

// Creamos la clase Visitor
class AreaCalculator {
  visitTriangle(triangle) {
    return (triangle.base * triangle.height) / 2;
  }
  
  visitSquare(square) {
    return square.side * square.side;
  }
  
  visitCircle(circle) {
    return Math.PI * circle.radius * circle.radius;
  }
}

// Creamos las formas
const triangle = new Triangle(10, 5);
const square = new Square(7);
const circle = new Circle(3);

// Creamos el Visitor
const areaCalculator = new AreaCalculator();

// Utilizamos el Visitor para calcular el área de cada forma
console.log(triangle.accept(areaCalculator)); //Output: 25
console.log(square.accept(areaCalculator)); //Output: 49
console.log(circle.accept(areaCalculator)); //Output: 28.274333882308138
