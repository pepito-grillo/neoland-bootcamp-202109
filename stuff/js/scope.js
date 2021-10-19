console.log('> scope')

//

var a = 1

function f1() { // shadowning
    var a = 2

    return a
}

console.log(a)
console.log(f1())
console.log(a)

//

var b = 1

function f2() {
    b = 2

    return b
}

console.log(b)
console.log(f2())
console.log(b)

//

var c = 1

function f3() {
    var c = 2

    function f4() {
        var c

        return c
    }

    return f4()
}

console.log(f3()) // undefined

//

var d = 1

function f4() {
    //var d = 2

    function f4() {
        //var d

        return d
    }

    return f4()
}

console.log(f4()) // 1
