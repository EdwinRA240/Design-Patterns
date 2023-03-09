// class Tag
// {
//   static get indentSize() { return 2; }

//   constructor(name='', text='')
//   {
//     this.name = name;
//     this.text = text;
//     this.children = [];
//   }

//   toStringImpl(indent)
//   {
//     let html = [];
//     let i = ' '.repeat(indent * Tag.indentSize);
//     html.push(`${i}<${this.name}>\n`);
//     if (this.text.length > 0)
//     {
//       html.push(' '.repeat(Tag.indentSize * (indent+1)));
//       html.push(this.text);
//       html.push('\n');
//     }

//     for (let child of this.children)
//       html.push(child.toStringImpl(indent+1));

//     html.push(`${i}</${this.name}>\n`);
//     return html.join();
//   }

//   toString()
//   {
//     return this.toStringImpl(0);
//   }

//   static create(name)
//   {
//     return new HtmlBuilder(name);
//   }
// }

// class HtmlBuilder
// {
//   constructor(rootName)
//   {
//     this.root = new Tag(rootName);
//     this.rootName = rootName;
//   }

//   // non-fluent
//   addChild(childName, childText)
//   {
//     let child = new Tag(childName, childText);
//     this.root.children.push(child);
//   }

//   // fluent
//   addChildFluent(childName, childText)
//   {
//     let child = new Tag(childName, childText);
//     this.root.children.push(child);
//     return this;
//   }

//   toString()
//   {
//     return this.root.toString();
//   }

//   clear()
//   {
//     this.root = new Tag(this.rootName);
//   }

//   build()
//   {
//     return this.root;
//   }
// }

// // just a single paragraph using string concatenation
// const hello = 'hello';
// let html = [];
// html.push('<p>');
// html.push(hello);
// html.push('</p>');
// console.log(html.join());

// // a list with 2 words in it
// const words = ['hello', 'world'];
// html = [];
// html.push('<ul>\n');
// for (let word of words)
//   html.push(`  <li>${word}</li>\n`);
// html.push('</ul>');
// console.log(html.join());

// // ordinary non-fluent builder
// //let builder = new HtmlBuilder('ul');
// let builder = Tag.create('ul');
// for (let word of words)
//   builder.addChild('li', word);
// //console.log(builder.toString());
// let tag = builder.build();
// console.log(tag.toString());

// // fluent builder
// builder.clear();
// builder
//   .addChildFluent('li', 'foo')
//   .addChildFluent('li', 'bar')
//   .addChildFluent('li', 'baz');
// console.log(builder.toString());

class Pizza {
  constructor() {
    this.thinDough = false;
    this.cheese = false;
    this.tomato = false;
    this.pineappleSlices = 0;
    this.baconStrips = 0;
    this.otherIngredients = [];
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
  .build();

console.log(pizza);
