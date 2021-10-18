console.log('> higher order functions')

function g() {
    return function() { return 'hello world' }
}

console.log(g()())

function h(callback) {
    callback()
}

h(function() {
    console.log('hola mundo')
})

function forEach(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        callback(element, i)        
    }
}

var a = ['a', 'b', 'c']

forEach(a, function(val, index) {
    console.log(index, val)
})

forEach(a, function(val, index) {
    console.log(index, val.toUpperCase())
})

a.forEach(function(val, index) {
    console.log(index, val)
})

a.forEach(function(val, index) {
    console.log(index, val.toUpperCase())
})

var a = [1, 2, 3]

forEach(a, function(val, index) {
    console.log(index, val * 10)
})

forEach(a, function(val, index) {
    console.log(index, val ** 2)
})

forEach(a, function(val, index) {
    console.log(index, Math.sqrt(val))
})

console.log('> for loop')

function f1() {
    for (var i = 0; i < 10; i++) {
        console.log(i)

        if (i === 5)
            return 'hi'
    }
}

console.log(f1())

function f2() {
    for (var i = 0; i < 10; i++) {
        console.log(i)

        if (i === 5)
            break
    }

    return 'hi'
}

console.log(f2())

function f3() {
    var go = true

    for (var i = 0; i < 10 && go; i++) {
        console.log(i)

        if (i === 5)
            go = false
    }
    
    return 'hi'
}

console.log(f3())

console.log('> functions')

function f4() {
    console.log('hi')
}

function f5(a) { 
    if (a)
        return // early return

    console.log('hi')
}

console.log(f4())
console.log(f5(false))
console.log(f5(true))