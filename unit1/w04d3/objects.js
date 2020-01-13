class Hamster {
    constructor(name) {
        this.owner = '';
        this.name = name;
        this.price = 15;
    }
    wheelRun () {
        console.log("squeak squeak")
    }
    eatFood () {
        console.log("nibble nibble")
    }
    getPrice () {
        return this.price
    }
}

class Person {
    constructor(name) {
        this.name = name;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamsters = [];
        this.bankAccount = 0; 
    }
    getName () {
        return this.name;
    }
    getAge () {
        return this.age;
    }
    getWeight () {
        return this.weight;
    }
    greet () {
        console.log(this.name)
    }
    eat () {
        this.weight ++;
        this.mood ++;
    }
    exercise () {
        this.weight --;
    }
    ageUp () {
        this.age ++;
        this.height ++;
        this.weight ++;
        this.mood --;
        this.bankAccount += 10;
    }
    buyHamster () {
        this.hamsters.push(gus.name);
        this.mood += 10;
        this.bankAccount -= gus.getPrice();
    }
}

const timmy = new Person ("Timmy")

timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
console.log(timmy.getAge());

timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
console.log(timmy.getWeight())

timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
console.log(timmy.getWeight());

timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
console.log(timmy.getAge());

const gus = new Hamster ('gus')
console.log(gus)

gus.owner = "timmy"
console.log(gus)

timmy.buyHamster(gus);
console.log(timmy.hamsters)

for (let i = 0; i < 15; i++) {
    timmy.ageUp();
}
console.log(timmy.getAge())

timmy.eat();
timmy.eat();
console.log(timmy.getWeight());

timmy.exercise()
timmy.exercise()
console.log(timmy.getWeight());
























