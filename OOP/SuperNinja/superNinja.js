class Ninja {
    constructor(name) {
    this.name = name;
    this.health = 90;
    this.speed = 3;
    this.strength = 3;
    }

    sayName() {
        console.log(`Ninja's name is ${this.name}.`)
    }

    showStats() {
        console.log(`Ninja's name: ${this.name}; strength: ${this.strength}; speed: ${this.speed}; health: ${this.health}`)
    }

    drinkSake() {
        this.health += 10;
        console.log(`Health increased : ${this.health}`)
    }

}

class Sensei extends Ninja {
    constructor(name) {
        super(name)
        this.wisdom = 10;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log(`Wisdom message: What one programmer can do in one month, two programmers can do in two months.`)
    }

}

const superSensei = new Sensei ('Master Yoshi');
superSensei.speakWisdom()
superSensei.showStats();