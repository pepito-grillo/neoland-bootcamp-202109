console.log('> objects')

var o = {} // new Object
var p = {}
var q = {}

console.log(o === p)

o.a = p
p.name = 'P'
console.log(o.a.name)

o.a.b = q
q.name = 'Q'
console.log(o.a.b.name)

o.name = 'O'
console.dir(o)

console.dir(p)

var keys = Object.keys(o)
console.dir(keys)

var keys = Object.keys(p)
console.dir(keys)

var keys = Object.keys(q)
console.dir(keys)

var o = { name: 'Peter', surname: 'Pan', age: 16 }

var keys = Object.keys(o)

for (var i = 0; i < keys.length; i++) {
    var key = keys[i]

    var value = o[key]

    console.log(key, value)
}

var a = [1, 2, 3]
console.log(a[0])
console.log(a['0'])

o[0] = 1
console.dir(o)
console.log(o[0])
console.log(o['0'])

var key = 'name'
console.log(o[key])

var key = 'surname'
console.log(o[key])

console.log(o.key)

var o = {
    a: 1, b: 2, c: 3, 10: {
        d: function () {
            return {
                e: ['hola mundo', true, 1, null, undefined, {
                    f: function () {
                        return {
                            h: [0, 1, 2, {
                                hello: 'world'
                            }]
                        }
                    }
                }]
            }
        }
    }
}

console.log(o[10].d().e[5].f().h[3].hello)

var o = { name: 'Peter', surname: 'Pan', age: 16 }

for (var key in o)
    console.log(key, o[key])

var a = [1, 2, 3]
a.name = 'A'

for (var key in a)
    console.log(key, a[key])

var o = { 0: 1, 1: 2, 2: 3, length: 3 }

for (var key in o)
    console.log(key, o[key])

function f() {
    for (var key in arguments)
        console.log(key, arguments[key])
}

f(1, 2, 3)

var a = [1, 2, 3]

for (var val of a) // es6
    console.log(val)

function f() {
    for (var val of arguments)
        console.log(val)
}

f(1, 2, 3)