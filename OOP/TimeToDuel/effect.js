const Card = require('./card.js')
const Unit = require('./unit.js')

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
    super(name, cost);
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
    }

    play(target) {
        if (target instanceof Unit) {
            if(this.stat == "resilience") {
                target.res += this.magnitude
                console.log(`${target.name} played effect: ${this.text} total = ${target.res}`)
            } else if (this.stat == "power") {
                target.power += this.magnitude;
                console.log(`${target.name} played effect: ${this.text} total = ${target.power}`)
            } 
        } else {
            throw new Error ("Target must be a unit!")
        }
    }

}

module.exports = Effect