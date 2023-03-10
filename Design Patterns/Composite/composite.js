//Componente
class Componente {
  constructor(nombre) {
    this.nombre = nombre;
  }

  mostrar() {
    console.log(this.nombre);
  }
}

//Contenedor -> Hereda de Componente
class Contenedor extends Componente {
  constructor(nombre) {
    super(nombre);
    this.hijos = [];
  }

  agregar(componente) {
    this.hijos.push(componente);
  }
  
  mostrar() {
    console.log(this.nombre + ":");
    for (let hijo of this.hijos) {
      hijo.mostrar();
    }
  }
}

//Hoja -> Hereda de Componente
class Hoja extends Componente {
  constructor(nombre) {
    super(nombre);
  }
}

// Crear algunos componentes
let contenedor1 = new Contenedor("Contenedor1");
let contenedor2 = new Contenedor("Contenedor2");
let contenedor3 = new Contenedor("Contenedor3");
let hoja1 = new Hoja("Hoja1");
let hoja2 = new Hoja("Hoja2");
let hoja3 = new Hoja("Hoja3");
let hoja4 = new Hoja("Hoja4");
let hoja5 = new Hoja("Hoja5");

// Agregar los componentes al contenedor1
contenedor1.agregar(hoja1);
contenedor1.agregar(hoja2);

// Agregar los componentes al contenedor2
contenedor2.agregar(hoja3);
contenedor2.agregar(contenedor1);

// Agregar los componentes al contenedor3
contenedor3.agregar(hoja4);
contenedor3.agregar(hoja5);
contenedor3.agregar(contenedor2);

// Mostrar el contenedor3 y a todos sus hijos
contenedor3.mostrar();
// console.log(contenedor3);