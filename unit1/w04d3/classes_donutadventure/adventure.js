class Hero {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.weapons = {sprinkleSpray: 5, sugarShock: 10}
        this.catchPhrases = ["I\'m fresher than day old pizza", "You can\'t count my calories"]
    }
    talkSass () {
        let array = Math.floor(Math.random() * 2)
        return this.catchPhrases[array]
    }
    announceHealth () {
        console.log(this.health);
    }
    fight (enemy) {
        enemy.health -= this.weapons.sugarShock;
        console.log("Dougie hit " + "Pizza Rat for " + this.weapons.sugarShock + " hitpoints!")
    }
}

const dougie = new Hero ("Dougie");



class Enemy {
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.weapons = {peperoniStars: 5, cheeseGrease: 10}
        this.catchPhrases = ["I\'m youtube famous", "I\'m more dangerous than an undercover sewer"]
    }
    talkSmack () {
        let array = Math.floor(Math.random() * 2)
        return this.catchPhrases[array]
    }
    announceHealth () {
        console.log(this.health)
    }
    fight (enemy) {
        enemy.health -= this.weapons.peperoniStars;
        console.log("Pizza Rat hit " + "Dougie for " + this.weapons.peperoniStars + " hitpoints!")
    }
}

const pizzaRat = new Enemy ("Pizza Rat")

//random trash talk & announcements
console.log(dougie.talkSass())
console.log(pizzaRat.talkSmack())
console.log(dougie.announceHealth())
console.log(pizzaRat.announceHealth())

//dougie attacks and pizzarat now has 90 health
console.log(dougie.fight(pizzaRat))
console.log(pizzaRat.health)

//pizzarat attacks dougie and now has 95 health
console.log(pizzaRat.fight(dougie))
console.log(dougie.health)
































































