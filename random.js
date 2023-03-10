class Random{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    getName(){
        return this.name;
    }

    get Name(){
        return this.lastName;
    }
}


let Person = new Random('John', 'Smith');

console.log(Person.getName());