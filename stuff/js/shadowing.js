console.log('> shadowing')

function hello(name) {
    return 'hello ' + name
}

var name = 'Peter'

console.log(hello())
console.log(hello('Wendy'))