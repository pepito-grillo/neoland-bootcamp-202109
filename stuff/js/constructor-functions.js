console.log('> constructor functions')

var o = new Object // {}

function Riccardo() {

}

function Nico() {

}

var r = new Riccardo
var n = new Nico

console.log(r instanceof Object)
console.log(r instanceof Riccardo)
console.log(r instanceof Nico)
console.log(n instanceof Object)
console.log(n instanceof Riccardo)
console.log(n instanceof Nico)

Riccardo.prototype.pop = function() {
    return '💩'
}

console.log(r.pop())

Nico.prototype.dance = function() {
    return '🕺'
}

console.log(n.dance())

//

function Human(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
}

var p = new Human('Peter Pan', 'male', 15)
var w = new Human('Wendy Pan', 'female', 14)

console.log(p)
console.log(w)

var r = new Human('Riccardo Montanari', 'male', 43)
var n = new Human('Noelia Saura', 'female', 26)
var m = new Human('Manuel Barzi', 'male', 43)
var s = new Human('Sergio Ayala', 'male', 30)
var g = new Human('Gerard Sole', 'male', 16)
var a = new Human('Ana Rodriguez', 'female', 31)

var staff = [p, w, r, n, m, s, g, a]

console.log(staff)

var women = staff.filter(function(human) {
    return human.gender === 'female'
})

console.log(women)

Human.prototype.walk = function() {
    return '🚶🏻‍♀️'
}

Human.prototype.eat = function() {
    return '🍔'
}

Human.prototype.pee = function() {
    return '💦'
}

Human.prototype.poo = function() {
    return '💩'
}

Human.prototype.toString = function() {
    return this.name + ', ' + this.gender + ', ' + this.age
}

console.log(r.toString())
console.log(a.toString())
console.log(r.toString === a.toString)

Human.prototype.toString = function() { return this.name.toUpperCase() }

console.log(r.toString())
console.log(a.toString())
console.log(r.toString === a.toString)

//

function Biblio() {
    for (var i = 0; i < arguments.length; i++) {
        this[i] = arguments[i]
    }

    this.length = arguments.length
}

var b = new Biblio('a', 'b', 'c')
var b2 = new Biblio(true, false, false, true, true)

console.log(b)
console.log(b2)

for (var i = 0; i < b.length; i++) {
    var element = b[i]

    console.log(element)
}

for (var i = 0; i < b2.length; i++) {
    var element = b2[i]

    console.log(element)
}

Biblio.prototype.forEach = function(callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        callback(element, i)        
    }
}

b.forEach(function(char) {
    console.log(char)
})

b2.forEach(function(bool) {
    console.error(bool)
})

console.log(b instanceof Array)
console.log(b instanceof Object)
console.log(b instanceof Biblio)

var a = new Array
var b = new Biblio

a[0] = 'hola mundo'
console.log(a)

b[0] = 'hola mundo'
console.log(b)

b.length = 1
console.log(b)

Biblio.prototype.push = function() {
    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i]
        
        this.length++
    }

    return this.length
}

var a = new Array
var b = new Biblio

a.push('hola', 'mundo')
console.log(a)

b.push('hola', 'mundo')
console.log(b)
