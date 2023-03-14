class Mediator {
    constructor() {
      this.colleagues = [];
    }
  
    register(colleague) {
      this.colleagues.push(colleague);
      colleague.setMediator(this);
    }
  
    send(sender, message) {
      this.colleagues.forEach(colleague => {
        if (colleague !== sender) {
          colleague.receive(message);
        }
      });
    }
  }
  
  class Colleague {
    constructor(name) {
      this.name = name;
      this.mediator = null;
    }
  
    setMediator(mediator) {
      this.mediator = mediator;
    }
  
    send(message) {
      this.mediator.send(this, message);
    }
  
    receive(message) {
      console.log(`${this.name} received: ${message}`);
    }
  }
  
  // Ejemplo de uso
  
  const mediator = new Mediator();
  
  const colleagueOne = new Colleague("Alice");
  const colleagueTwo = new Colleague("Bob");
  const colleagueThree = new Colleague("Charlie");
  
  mediator.register(colleagueOne);
  mediator.register(colleagueTwo);
  mediator.register(colleagueThree);
  
  colleagueOne.send("Hello World!");
  colleagueTwo.send("Greetings!");