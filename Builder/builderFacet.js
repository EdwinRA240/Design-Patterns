class Person {
  constructor() {
    //Name
    this.name = this.lastName = "";

    // address info
    this.streetAddress = this.postcode = this.city = "";

    // employment info
    this.companyName = this.position = "";
    this.annualIncome = 0;
  }

  toString() {
    return (
      `${this.name} ${this.lastName} lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n` +
      `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
    );
  }
}

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  get names() {
    return new PersonNameBuilder(this.person);
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonNameBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  name(name) {
    this.person.name = name;
    return this;
  }

  lastName(lastName) {
    this.person.lastName = lastName;
    return this;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

let pb = new PersonBuilder();
let person = pb.lives
  .at("123 London Road")
  .in("London")
  .withPostcode("SW12BC")
  .works.at("Fabrikam")
  .asA("Engineer")
  .earning(123000)
  .build();
console.log(person.toString());
let person2 = pb.lives
  .at("Azcapotzalco")
  .in("Mexico")
  .withPostcode("55120")
  .works.at("Roatech")
  .asA("Software Engineer")
  .earning(6000)
  .names.name("Edwin")
  .lastName("Ramirez")
  .build();
console.log(person2.toString());
