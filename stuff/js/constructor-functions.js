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

Riccardo.prototype.pop = function () {
    return '💩'
}

console.log(r.pop())

Nico.prototype.dance = function () {
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

var women = staff.filter(function (human) {
    return human.gender === 'female'
})

console.log(women)

Human.prototype.walk = function () {
    return '🚶🏻‍♀️'
}

Human.prototype.eat = function () {
    return '🍔'
}

Human.prototype.pee = function () {
    return '💦'
}

Human.prototype.poo = function () {
    return '💩'
}

Human.prototype.toString = function () {
    return this.name + ', ' + this.gender + ', ' + this.age
}

console.log(r.toString())
console.log(a.toString())
console.log(r.toString === a.toString)

Human.prototype.toString = function () { return this.name.toUpperCase() }

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

Biblio.prototype.forEach = function (callback) {
    for (var i = 0; i < this.length; i++) {
        var element = this[i]

        callback(element, i)
    }
}

b.forEach(function (char) {
    console.log(char)
})

b2.forEach(function (bool) {
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

Biblio.prototype.push = function () {
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

//

var socks1 = { type: 'socks', brand: 'adidas', quantity: 100 }
var socks2 = { type: 'socks', brand: 'nike', quantity: 100 }
var socks3 = { type: 'socks', brand: 'puma', quantity: 100 }
var tshirt1 = { type: 't-shirt', brand: 'adidas', quantity: 100 }
var tshirt2 = { type: 't-shirt', brand: 'nike', quantity: 100 }
var tshirt3 = { type: 't-shirt', brand: 'puma', quantity: 100 }

var products = [socks1, socks2, socks3, tshirt1, tshirt2, tshirt3]

console.log(products.filter(function (product) {
    return product.brand === 'adidas'
}))

function Product(type, brand, quantity) {
    this.type = type
    this.brand = brand
    this.quantity = quantity
}

Product.prototype.toString = function() {
    return '> ' + this.type + ', ' + this.brand + ', ' + this.quantity;
}

var socks1 = new Product('socks', 'adidas', 100)
var socks2 = new Product('socks', 'nike', 100)
var socks3 = new Product('socks', 'puma', 100)
var tshirt1 = new Product('tshirt', 'adidas', 100)
var tshirt2 = new Product('tshirt', 'nike', 100)
var tshirt3 = new Product('tshirt', 'puma', 100)

var products = [socks1, socks2, socks3, tshirt1, tshirt2, tshirt3]

products.forEach(function(product) {
    console.log(product.toString())
})