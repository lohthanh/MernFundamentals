const Card = require('./card.js')

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        target.res = this.power - target.res
        console.log(`${this.name} attacks ${target.name}. ${target.name} resilience is ${target.res}`)
    }
}

module.exports = Unit