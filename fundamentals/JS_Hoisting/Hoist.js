// 1
console.log(hello);
var hello = 'world';
// var hello;
// console.log(hello); logs undefined
// hello = 'world';

// 2
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// console.log(needle); logs 'magnet'

// 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay'
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// console.log(brendan); logs 'super cool'

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// console.log(food); logs 'chicken'
// food = 'half-chicken'
// console.log(food); logs 'half-chicken'
// var food;

// 5
mean();
console.log(food);
var mean = function() {
    food = 'chicken';
    console.log(food);
    var food = 'fish';
    console.log(food);
}
console.log(food);
// mean(); TypeError: not a function

// 6
console.log(genre);
var genre = 'disco';
rewind();
function rewind(){
    genre = 'rock';
    console.log(genre);
    var genre = 'r&b';
    console.log(genre);
}
console.log(genre);
// genre = undefined
// rewind(); logs 'rock', logs 'r&b'
// console.log(genre); logs 'disco'

// 7
dojo = 'san jose';
console.log(dojo);
learn();
function learn() {
    dojo = 'seattle';
    console.log(dojo);
    var dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo);
// console.log(dojo); ReferenceError - dojo not defined

// 8
console.log(makeDojo('Chicago', 65));
console.log(makeDojo('Berkeley', 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <=0) {
        dojo = 'closed for now'
    }
    return dojo;
}
// TypeError: dojo = 'Closed for now' already assigned to const dojo = {}