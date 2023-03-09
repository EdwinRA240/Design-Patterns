// La clase que queremos hacer singleton
class BaseDeDatos {
  constructor(nombre) {
    this.nombre = nombre;
  }

  // El método estático que crea o devuelve la instancia única
  static getInstance(nombre) {
    // Si la instancia no existe, la creamos
    if (!BaseDeDatos.instance) {
      BaseDeDatos.instance = new BaseDeDatos(nombre);
    }
    // Siempre devolvemos la instancia única
    return BaseDeDatos.instance;
  }
}

// Crear dos objetos de la clase BaseDeDatos con el mismo nombre
let bd1 = BaseDeDatos.getInstance("MySQL");
let bd2 = BaseDeDatos.getInstance("MySQL");

// Comprobar si son el mismo objeto
console.log(bd1 === bd2); // true

// Crear otro objeto de la clase BaseDeDatos con otro nombre
let bd3 = BaseDeDatos.getInstance("MongoDB");

// Comprobar si es el mismo objeto que los anteriores
console.log(bd1 === bd3); // false


//NOTA: Static no puede ser accedido desde otros objetos o intancias,
//      si no desde la original.