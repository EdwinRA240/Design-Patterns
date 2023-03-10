class Pizza {
  constructor() {
    this.thinDough = false;
    this.cheese = false;
    this.tomato = false;
    this.pineappleSlices = 0;
    this.baconStrips = 0;
    this.otherIngredients = [];
  }

  toString() {
    return (
      `${this.thinDough} ${this.cheese} ${this.tomato}` +
      ` ${this.pineappleSlices} ${this.baconStrips} ${this.otherIngredients}`
    );
  }
}

class PizzaBuilder {
  constructor() {
    this.pizza = new Pizza();
  }

  setThinDough() {
    this.pizza.thinDough = true;
    return this;
  }

  setCheese() {
    this.pizza.cheese = true;
    return this;
  }

  setTomato() {
    this.pizza.tomato = true;
    return this;
  }

  addPineappleSlices(slices) {
    this.pizza.pineappleSlices += slices;
    return this;
  }

  addBaconStrips(strips) {
    this.pizza.baconStrips += strips;
    return this;
  }

  addOtherIngredient(ingredient) {
    this.pizza.otherIngredients.push(ingredient);
    return this;
  }

  build() {
    return this.pizza;
  }
}

// Crear una pizza con masa fina, queso, tomate y cuatro tiras de bacon
let pizza = new PizzaBuilder()
  .setThinDough()
  .setCheese()
  .setTomato()
  .addBaconStrips(4)
  .addOtherIngredient("pepperoni")
  .build();

console.log(pizza.toString());
