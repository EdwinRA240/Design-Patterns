// Creamos una clase Publisher que va a ser observada por varios Subscribers
class Publisher {
    constructor() {
      this.subscribers = [];
    }
  
    // Agregamos un método para suscribirse a los cambios del Publisher
    subscribe(subscriber) {
      this.subscribers.push(subscriber);
    }
  
    // Agregamos un método para notificar a los Subscribers de los cambios
    notify(data) {
      this.subscribers.forEach((subscriber) => subscriber.update(data));
    }
  }
  
  // Creamos una clase Subscriber que va a observar a un Publisher
  class Subscriber {
    constructor(name) {
      this.name = name;
    }
  
    // Agregamos un método que va a ser llamado por el Publisher cuando haya un cambio
    update(data) {
      console.log(`${this.name} recibió la actualización: ${data}`);
    }
  }
  
  // Creamos un objeto Publisher y dos objetos Subscriber
  const publisher = new Publisher();
  const subscriber1 = new Subscriber("Subscriber 1");
  const subscriber2 = new Subscriber("Subscriber 2");
  
  // Suscribimos a los Subscribers al Publisher
  publisher.subscribe(subscriber1);
  publisher.subscribe(subscriber2);
  
  // Enviamos una actualización al Publisher, lo que debe notificar a los Subscribers
  publisher.notify("update 1.0.5");
  publisher.notify("update 2.8.5");

  // Salida esperada:
  // Subscriber 1 recibió la actualización: update 1.0.5
  // Subscriber 2 recibió la actualización: update 1.0.5
  // Subscriber 1 recibió la actualización: update 2.8.5
  // Subscriber 2 recibió la actualización: update 2.8.5
  