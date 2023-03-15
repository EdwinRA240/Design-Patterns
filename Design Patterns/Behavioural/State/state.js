// Creamos un estado base
class State {
  constructor() {
    this.color = "blanco";
  }

  getColor() {
    return this.color;
  }
}

// Creamos una clase para cada estado
class StateRojo extends State {
  constructor() {
    super();
    this.color = "rojo";
  }

  handle(context) {
    console.log(`Cambiando el color de ${context.nombre} a rojo`);
    context.setState(this);
  }
}

class StateVerde extends State {
  constructor() {
    super();
    this.color = "verde";
  }

  handle(context) {
    console.log(`Cambiando el color de ${context.nombre} a verde`);
    context.setState(this);
  }
}

class StateAzul extends State {
  constructor() {
    super();
    this.color = "azul";
  }

  handle(context) {
    console.log(`Cambiando el color de ${context.nombre} a azul`);
    context.setState(this);
  }
}

// Creamos el contexto que va a cambiar de estado
class Contexto {
  constructor(nombre) {
    this.nombre = nombre;
    this.state = null;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

// Creamos nuestro objeto de contexto y cambiamos su estado
const contexto = new Contexto("Botón");
const stateRojo = new StateRojo();
const stateVerde = new StateVerde();
const stateAzul = new StateAzul();

// Aplicamos un estado y lo cambiamos
stateRojo.handle(contexto);
console.log(contexto.getState().getColor());

stateVerde.handle(contexto);
console.log(contexto.getState().getColor());

stateAzul.handle(contexto);
console.log(contexto.getState().getColor());
