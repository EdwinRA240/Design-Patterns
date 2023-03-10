// El patrón de diseño chain of responsibility te permite pasar solicitudes 
// a lo largo de una cadena de manejadores potenciales hasta que uno de ellos 
// gestiona la solicitud1. Este patrón evita el acoplamiento entre el emisor y 
// el receptor de la solicitud, y permite añadir o quitar manejadores fácilmente.

// Clase abstracta que define la interfaz de los manejadores
class Handler {
  constructor() {
    this.next = null; // El siguiente manejador en la cadena
  }

  setNext(handler) {
    // Establece el siguiente manejador
    this.next = handler;
    return handler; // Devuelve el manejador para facilitar el encadenamiento
  }

  handle(request) {
    // Intenta gestionar la solicitud o pasa al siguiente manejador
    if (this.canHandle(request)) {
      // Si puede gestionarla, llama al método correspondiente
      this.doHandle(request);
    } else if (this.next) {
      // Si no puede y hay un siguiente manejador, lo delega a él
      this.next.handle(request);
    } else {
      // Si no hay ningún manejador que pueda gestionarla, se muestra un mensaje de error
      console.log("No se puede procesar la solicitud");
    }
  }

  canHandle(request) {
    // Método abstracto que determina si el manejador puede gestionar la solicitud
    throw new Error("Este método debe ser implementado por las subclases");
  }

  doHandle(request) {
    // Método abstracto que realiza la acción correspondiente a la solicitud
    throw new Error("Este método debe ser implementado por las subclases");
  }
}

// Clase concreta que gestiona las solicitudes de tipo A
class HandlerA extends Handler {
  canHandle(request) {
    return request.type === "A"; // Solo puede gestionar las solicitudes de tipo A
  }

  doHandle(request) {
    console.log("Procesando solicitud A"); // Muestra un mensaje por consola
  }
}

// Clase concreta que gestiona las solicitudes de tipo B
class HandlerB extends Handler {
  canHandle(request) {
    return request.type === "B"; // Solo puede gestionar las solicitudes de tipo B
  }

  doHandle(request) {
    console.log("Procesando solicitud B"); // Muestra un mensaje por consola
  }
}

// Clase concreta que gestiona las solicitudes de tipo C
class HandlerC extends Handler {
  canHandle(request) {
    return request.type === "C"; // Solo puede gestionar las solicitudes de tipo C
  }

  doHandle(request) {
    console.log("Procesando solicitud C"); // Muestra un mensaje por consola
  }
}

// Creamos los objetos manejadores y los encadenamos en orden 
let handlerA = new HandlerA();
let handlerB = new HandlerB();
let handlerC = new HandlerC();

handlerA.setNext(handlerB).setNext(handlerC);

// Creamos algunas solicitudes y las pasamos al primer manejador 
let requestA = { type: "A" };
let requestB = { type: "B" };
let requestC = { type: "C" };
let requestD = { type: "D" };

handlerA.handle(requestA); // Procesando solicitud A 
handlerA.handle(requestB); // Procesando solicitud B 
handlerA.handle(requestC); // Procesando solicitud C 
handlerA.handle(requestD); // No se puede procesar la solicitud
