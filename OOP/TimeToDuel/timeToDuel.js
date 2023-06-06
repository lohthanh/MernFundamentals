const Unit = require('./unit.js');
const Effect = require('./effect.js');

const player1 = new Unit ("Red Belt Ninja", 3, 3, 4);
const player2 = new Unit ("Black Belt Ninja", 4, 5, 4);

const effect1 = new Effect ("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const effect2 = new Effect ("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
const effect3 = new Effect ("Pair Programming", 3, "Increase target's power by 2", "power", 2)

effect1.play(player1)
effect2.play(player1)
effect3.play(player1)
player1.attack(player2)