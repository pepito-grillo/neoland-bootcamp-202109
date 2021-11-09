console.log('> rest parameter')

// function add() {
//     var result = 0

//     for (var i = 0; i < arguments.length; i++) {
//         var value = arguments[i]

//         result += value // result = result + value
//     }

//     return result
// }

function add(...values) {
    var result = 0

    for (var i = 0; i < values.length; i++) {
        var value = values[i]

        result += value // result = result + value
    }

    return result
}

function add(...values) {
    var result = 0

    result = values.reduce((accum, value) => accum + value)

    return result
}

// function add() {
//     var result = 0

// ERROR
//     result = arguments.reduce((accum, value) => accum + value)

//     return result
// }

// console.log(add(1, 2, 3, 4, 5))

// console.log(add(1, 2, 3))

// console.log(add(1, 2))

function hello(name, ...names) {
    names.forEach(_name => console.log(name + ': hello ' + _name))
}

hello('Peter', 'Anna', 'Maria', 'Sonia', 'George')

// function hello(...names, name) { // ERROR
//     names.forEach(_name => console.log(name + ': hello ' + _name))
// }

// hello('Anna', 'Maria', 'Sonia', 'George', 'Peter')