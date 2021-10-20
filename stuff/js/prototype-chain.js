console.log('> prototype chain')

function Being(species, age) {
    this.species = species
    this.age = age
}

Being.prototype.describe = function() {
    for (var key in this)
        console.log(key, this[key])
}

// var plant = new Being('vegetable', 0.3)
// var human = new Being('human', 10)

function Plant(denomination, age) {
    this.denomination = denomination
    Being.call(this, 'plant', age)
}

Plant.prototype = Object.create(Being.prototype)
Plant.prototype.constructor = Plant

Plant.prototype.photosynth = function() {
    return '☀️'
}

//var rose = new Plant('rose', 0.01)
var rose = new Plant('cactus', 10)
console.log(rose.photosynth())
console.log(rose)
console.log(rose instanceof Plant)
console.log(rose instanceof Being)
console.log(rose instanceof Object)
console.log(rose instanceof Human)

function Animal(denomination, age) {
    this.denomination = denomination
    Being.call(this, 'animal', age)
}

Animal.prototype = Object.create(Being.prototype)
Animal.prototype.constructor = Animal

Animal.prototype.eat = function() {
    return '🍔🥒'
}

Animal.prototype.pee = function() {
    return '💦'
}

Animal.prototype.poo = function() {
    return '💩'
}

var symba = new Animal('lion', 12)
console.log(symba)
console.log(symba.eat())
console.log(symba.pee())
console.log(symba.poo())

console.log(symba instanceof Plant)
console.log(symba instanceof Being)
console.log(symba instanceof Animal)
console.log(symba instanceof Object)
console.log(symba instanceof Human)


function Human(name, age, weight) {
    this.name = name
    // this.age = age
    // Being('human', age) // WARN! these props will end in window!
    Animal.call(this, 'human', age)
    this.weight = weight
}

//var prototype = new Being
// prototype.constructor = Human
// Human.prototype = prototype

// Human.prototype = new Being
// delete Human.prototype.species
// delete Human.prototype.age

Human.prototype = Object.create(Animal.prototype)
Human.prototype.constructor = Human

Human.prototype.walk = function() {
    return  '🚶🏻‍♀️'
}

var nico = new Human('Nico Nieva', 36, 75)
console.log(nico)
console.log(nico.walk())
console.log(nico.eat())
console.log(nico.pee())
console.log(nico.poo())

console.log(nico instanceof Human)
console.log(nico instanceof Being)
console.log(nico instanceof Animal)
console.log(nico instanceof Object)
console.log(nico instanceof Array)

console.log(nico.__proto__ === Human.prototype)

console.log(nico.__proto__.__proto__ === Animal.prototype)

console.log(nico.__proto__.__proto__.__proto__ === Being.prototype)

console.log(nico.__proto__.__proto__.__proto__.__proto__ === Object.prototype)

console.log(nico.__proto__.__proto__.__proto__.__proto__.__proto__ === null) // null

//

function Product(type, brand, quantity) {
    this.type = type
    this.brand = brand
    this.quantity = quantity
}

Product.prototype.toString = function() { // overrriding
    return '### ' + this.type + ', ' + this.brand + ', ' + this.quantity + ' ###';
}

var socks1 = new Product('socks', 'adidas', 100)
var socks2 = new Product('socks', 'nike', 100)
var socks3 = new Product('socks', 'puma', 100)
var tshirt1 = new Product('tshirt', 'adidas', 100)
var tshirt2 = new Product('tshirt', 'nike', 100)
var tshirt3 = new Product('tshirt', 'puma', 100)

function Socks(brand, quantity) {
    Product.call(this, 'socks', brand, quantity)
}

Socks.prototype = Object.create(Product.prototype)
Socks.prototype.constructor = Socks

function TShirt(brand, quantity) {
    Product.call(this, 't-shirt', brand, quantity)
}

TShirt.prototype = Object.create(Product.prototype)
TShirt.prototype.constructor = TShirt

var socks1 = new Socks('adidas', 100)
var socks2 = new Socks('nike', 100)
var socks3 = new Socks('puma', 100)
var tshirt1 = new TShirt('adidas', 100)
var tshirt2 = new TShirt('nike', 100)
var tshirt3 = new TShirt('puma', 100)

var products = [socks1, socks2, socks3, tshirt1, tshirt2, tshirt3]

products.forEach(function(product) {
    console.log(product.toString())
})

// var allSocks = products.filter(function(product) {
//     return product.type === 'socks'
// })

var allSocks = products.filter(function(product) {
    return product instanceof Socks
})

console.log(allSocks)

var allTShirts = products.filter(function(product) {
    return product instanceof TShirt
})

console.log(allTShirts)

// delete Product.prototype.toString

// products.forEach(function(product) {
//     console.log(product.toString())
// })

// Object.prototype.toString = function() { // overrriding
//     return '### ' + this.type + ', ' + this.brand + ', ' + this.quantity + ' ###';
// }

// products.forEach(function(product) {
//     console.log(product.toString())
// })

// var o = { name: 'Peter Pan'}
// console.log(o.toString()) // ### undefined, undefined, undefined ###