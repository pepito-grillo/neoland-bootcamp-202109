console.log('> block scoped variables');

// var i
// for (i = 0; i < 10; i++) {
// for (var i = 0; i < 10; i++) {
//     console.log(i)
// }

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// const arr = [1, 2, 3]

// for (let j = 0; j < arr.length; j++) {
//     const i = j
// for (const i in arr) {
//     console.log(arr[i])
// }

// var name

// window.name = 'Wendy'

// {
//     //var name = 'Peter'
//     const name = 'Peter'

//     console.log(name)
// }

// console.log(name)

// window.a = 2

// {
//     //const a = 1
//     let a = 1

//     console.log(a)
// }

// console.log(a)

// {
//     const name = 'Wendy'

//     console.log(name)
// }

// {
//     const name = 'Peter'

//     console.log(name)
// }

// IIFE (Immediately Invoked Function Expression) alias "selfie" (Manu)

// (function() {
//     var a = 1

//     console.log(a)
// })()

// console.log(a)

//

var polyglot = {};

(function () {
    var me

    function hello(name) {
        return me + ': hello ' + name
    }

    function hola(name) {
        return me + ': hola ' + name
    }

    function ciao(name) {
        return me + ': ciao ' + name
    }

    function setName(name) {
        me = name
    }

    polyglot.hello = hello
    polyglot.hola = hola
    polyglot.ciao = ciao
    polyglot.setName = setName
})()

polyglot.setName('Nico')

// console.log(polyglot.ciao('Wendy'))
// console.log(polyglot.hello('Peter'))
// console.log(polyglot.hola('Juan'))


var names = ['Peter', 'Wendy', 'John']

// for (var i = 0; i < names.length; i++) {
for (let i = 0; i < names.length; i++) {
    setTimeout(() => {
        console.log(names[i])
    }, 1000 * (i + 1));
}

// for (var i = 0; i < names.length; i++) {
//     (function (i) {
//         setTimeout(() => {
//             console.log(names[i])
//         }, 1000 * (i + 1));
//     })(i)
// }