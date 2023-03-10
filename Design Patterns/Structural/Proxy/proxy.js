// Clase RealSubject: Representa el objeto real al que se quiere acceder
class RealSubject {
  constructor(name) {
    this.name = name; // Nombre del objeto real
  }

  // Método request: Simula una operación costosa o sensible
  request() {
    console.log(
      "Ejecutando la operación para el objeto " + this.name
    );
  }
}

// Clase Proxy: Representa el objeto intermediario que controla el acceso al objeto real
class Proxy {
  constructor(realSubject) {
    this.realSubject = realSubject; // Referencia al objeto real
    this.accessCount = 0; // Contador de accesos al objeto real
  }

  // Método request: Invoca al método del objeto real si se cumplen ciertas condiciones
  request() {
    // Si el contador es menor que 3, permite el acceso
    if (this.accessCount < 3) {
      this.realSubject.request(); // Llama al método del objeto real
      this.accessCount++; // Incrementa el contador de accesos
    }
    // Si no, deniega el acceso y muestra un mensaje
    else {
      console.log(
        "Acceso denegado al objeto " + this.realSubject.name
      );
    }
  }
}

// Cliente: Usa el proxy para acceder al objeto real

let realSubject1 = new RealSubject("Objeto1"); // Crea un objeto real con nombre Objeto1
let proxy1 = new Proxy(realSubject1); // Crea un proxy para ese objeto

proxy1.request(); // Accede al objeto por primera vez
proxy1.request(); // Accede al objeto por segunda vez
proxy1.request(); // Accede al objeto por tercera vez
proxy1.request(); // Intenta acceder al objeto por cuarta vez pero es denegado

let realSubject2 = new RealSubject("Objeto2"); // Crea otro objeto real con nombre Objeto2
let proxy2 = new Proxy(realSubject2); // Crea otro proxy para ese objeto

proxy2.request(); // Accede al otro objeto por primera vez

console.log(proxy2); // Imprime el proxy y su estructura