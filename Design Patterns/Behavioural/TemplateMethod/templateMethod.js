// Clase abstracta que define el esqueleto de un algoritmo
class Algoritmo {
  // Método que se encarga de llamar a los métodos que conforman el algoritmo
  ejecutar() {
    this.inicio();
    this.pasoIntermedio();
    this.fin();
  }

  // Métodos abstractos que serán implementados en las subclases
  inicio() {}
  pasoIntermedio() {}
  fin() {}
}

// Clase que hereda de la clase Algoritmo y que implementa los métodos abstractos
class AlgoritmoConcreto1 extends Algoritmo {
  inicio() {
    console.log("Inicio del Algoritmo Concreto 1");
  }

  pasoIntermedio() {
    console.log("Paso intermedio del Algoritmo Concreto 1");
  }

  fin() {
    console.log("Fin del Algoritmo Concreto 1");
  }
}

// Clase que hereda de la clase Algoritmo y que implementa los métodos abstractos
class AlgoritmoConcreto2 extends Algoritmo {
  inicio() {
    console.log("Inicio del Algoritmo Concreto 2");
  }

  pasoIntermedio() {
    console.log("Paso intermedio del Algoritmo Concreto 2");
  }

  fin() {
    console.log("Fin del Algoritmo Concreto 2");
  }
}

// Uso de las clases
const miAlgoritmo1 = new AlgoritmoConcreto1();
miAlgoritmo1.ejecutar(); 
// Salida: Inicio del Algoritmo Concreto 1, 
//  Paso intermedio del Algoritmo Concreto 1, 
//  Fin del Algoritmo Concreto 1

const miAlgoritmo2 = new AlgoritmoConcreto2();
miAlgoritmo2.ejecutar(); 
// Salida: Inicio del Algoritmo Concreto 2, 
//  Paso intermedio del Algoritmo Concreto 2, 
//  Fin del Algoritmo Concreto 2
