//Abstraccion
class Printer {
  constructor(ink, color) {
    this.ink = ink;
    this.color = color;
  }
}

class Ink {
  constructor(type) {
    this.type = type;
  }

  get Type() {
    return this.type;
  }
}

class Color {
  constructor(type){
    this.type = type;
  }
  
  get Type() {
    return this.type;
  }
}

////Se generan subclases de impresoras
class EnderPrinter extends Printer {
  print() {
    return `Printer: Ender, Ink: ${this.ink.type} and color is ${this.color.type}`;
  }
}

class EpsonPrinter extends Printer {
  print() {
    return `Printer: Epson, Ink: ${this.ink.type} and color is ${this.color.type}`;
  }
}

////Se crean distintos tipos de tintas
class LiquidInk extends Ink {
  constructor() {
    super("acrylic-based");
  }
}

class TonerInk extends Ink {
  constructor() {
    super("toner-based");
  }
}

class PowderInk extends Ink {
  constructor() {
    super("nylon-based");
  }
}

////Tipo de color
class BlackAndWhite extends Color {
  constructor(){
    super("BlackAndWhite");
  }
}

class Colors extends Color {
  constructor(color){
    super(color);
  }
}

////INSTANCIA
//Ink
const liquidInk = new LiquidInk();
const tonerInk = new TonerInk();
const powderInk = new PowderInk();

//Color
const blackAndWhite = new BlackAndWhite();
const red = new Colors("red");
const blue = new Colors("blue");

//Printer
const liquidPrinter = new EpsonPrinter(liquidInk, red);
const tonerPrinter = new EpsonPrinter(tonerInk, blue);
const enderPrinter = new EnderPrinter(powderInk, blackAndWhite);

console.log(liquidPrinter.print());
//output Printer: Epson, Ink: acrylic-based and color is red
console.log(tonerPrinter.print());
//output Printer: Epson, Ink: laser-based and color is blue
console.log(enderPrinter.print());
//output Printer: Printer: Ender, Ink: nylon-based and color is black and white
