// La clase prototipo
class Coche {
    constructor(modelo, color) {
      this.modelo = modelo;
      this.color = color;
    }
  
    toString() {
        return `${this.modelo} && ${this.color}`;
    }

    // El método clone que devuelve una copia del objeto
    clone() {
      return new Coche(this.modelo, this.color);
    }
  }
  
  // Crear un objeto de la clase Coche
  let coche1 = new Coche("Ford", "Rojo");
  
  // Clonar el objeto usando el método clone
  let coche2 = coche1.clone();
  
  // Mostrar los atributos de los objetos
  console.log(coche1.toString()); // Ford Rojo
  console.log(coche2.toString()); // Ford Rojo
  
  // Modificar el atributo color del objeto clonado
  coche2.color = "Azul";
  
  // Mostrar los atributos de los objetos después de la modificación
  console.log(coche1.toString()); // Ford Rojo
  console.log(coche2.toString()); // Ford Azul