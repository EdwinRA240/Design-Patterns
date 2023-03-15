//Creamos memento para guardar el estado de la aplicación
class Memento {
  constructor(balance) {
    this.balance = balance;
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
  }

  desposit(amount) {
    this.balance += amount;
    return new Memento(this.balance); //Realiza una instantanea memento
  }

  restore(m) {
    this.balance = m.balance;
  }

  toString() {
    return `Balance BankAccount: ${this.balance}`;
  }
}

//Creamos una nueva instancia de la clase BankAccount
let ba = new BankAccount(100);

//Depositos que creean memento
let m1 = ba.desposit(25);
let m2 = ba.desposit(175);
console.log(ba.toString());

//Restore con memento
ba.restore(m1);
console.log(ba.toString());

ba.restore(m2);
console.log(ba.toString());


