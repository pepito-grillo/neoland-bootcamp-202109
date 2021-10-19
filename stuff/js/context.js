console.log('> context (this)')

window.name = 'Window'

var o = {} // new Object

o.name = 'Peter'

// function describe() {
//     return this.name
// }
var describe = function() {
    return this.name
}

console.log(describe())

o.describe = describe

console.log(o.describe())
console.log(describe())
console.log(window.describe())

//

var o = {
    name: 'O',
    describe: describe,

    p: {
        name: 'P',
        describe: describe,

        q: {
            name: 'Q',
            describe: describe
        }
    }
}

console.log(o.describe())
console.log(o.p.describe())
console.log(o.p.q.describe())

//

// function Car(name) {
//     this.name = name
// }
var Car = function(name) {
    this.name = name
}

Car.prototype.describe = describe

var seat = new Car('Seat Ibiza')
var ford = new Car('Ford Fiesta')

console.log(seat.describe())
console.log(ford.describe())
console.log(seat.describe === ford.describe)
console.log(describe === Car.prototype.describe)