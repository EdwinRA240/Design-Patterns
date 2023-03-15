class Memento {
  constructor(balance) {
    this.balance = balance;
  }
}

class BankAccount {
  constructor(balance = 0) {
    this.balance = balance;
    this.changes = [new Memento(balance)]; //Agrega changes
    this.current = 0; //Permite llevar nocion, simulando una stack
  }

  deposit(amount) {
    this.balance += amount;
    //Se agrega al arr changes
    let m = new Memento(this.balance);
    this.changes.push(m);
    this.current++;
    return m;
  }

  restore(m) {
    if (m) {
      this.balance = m.balance;
      this.changes.push(m);
      this.current = this.changes.count - 1;
    }
  }

  undo() {
    if (this.current > 0) {
      let m = this.changes[--this.current];
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  redo() {
    if (this.current + 1 < this.changes.length) {
      let m = this.changes[++this.current];
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  toString() {
    return `Balance: $${this.balance}`;
  }
}

//Creamos la cuenta
let ba = new BankAccount(100);
console.log(ba.toString());
ba.deposit(50);
console.log(ba.toString());
ba.deposit(25);
console.log(ba.toString());

//Realizamos Undo and Redo
ba.undo();
console.log(`Undo 1: ${ba.toString()}`);
ba.undo();
console.log(`Undo 2: ${ba.toString()}`);
ba.redo();
console.log(`Redo 2: ${ba.toString()}`);
